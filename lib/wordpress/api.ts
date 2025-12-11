// lib/wordpress/api.ts
import { transformWordPressPosts, transformWordPressPostToBlogPost } from "./utils";
import type { WordPressPost, BlogPost, WordPressPostsResponseMeta } from "./types";

const DEFAULT_REST_BASE =
  process.env.NEXT_PUBLIC_WORDPRESS_REST_URL ||
  process.env.WORDPRESS_REST_URL ||
  "https://www.connecttechtalent.com/wp-json/wp/v2";

const POSTS_ENDPOINT = `${DEFAULT_REST_BASE.replace(/\/$/, "")}/posts`;

interface FetchPostsOptions {
  page?: number;
  perPage?: number;
  slug?: string;
}

async function fetchWordPressPosts(options: FetchPostsOptions = {}): Promise<{
  posts: WordPressPost[];
  meta: WordPressPostsResponseMeta;
}> {
  const { page = 1, perPage = 100, slug } = options;
  const url = new URL(POSTS_ENDPOINT);
  url.searchParams.set("page", page.toString());
  url.searchParams.set("per_page", perPage.toString());
  url.searchParams.set("_embed", "1");
  url.searchParams.set("orderby", "date");
  url.searchParams.set("order", "desc");
  if (slug) {
    url.searchParams.set("slug", slug);
  }

  const response = await fetch(url.toString(), {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `WordPress REST request failed (${response.status}): ${response.statusText} ${errorText}`.trim()
    );
  }

  const total = Number(response.headers.get("X-WP-Total") || "0");
  const totalPages = Number(response.headers.get("X-WP-TotalPages") || "0");
  const posts = (await response.json()) as WordPressPost[];

  return {
    posts,
    meta: { total, totalPages },
  };
}

/**
 * Fetch all blog posts from WordPress REST API.
 * Used for server-side rendering and initial load.
 */
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const { posts } = await fetchWordPressPosts({ perPage: 100 });
    return transformWordPressPosts(posts);
  } catch (error) {
    console.error("Error fetching blog posts from WordPress REST API:", error);
    return [];
  }
}

/**
 * Fetch paginated blog posts from WordPress REST API.
 */
export async function fetchBlogPosts(
  page: number = 1,
  perPage: number = 10
): Promise<{
  posts: BlogPost[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalPages: number;
}> {
  try {
    const { posts, meta } = await fetchWordPressPosts({ page, perPage });
    const transformedPosts = transformWordPressPosts(posts);

    return {
      posts: transformedPosts,
      hasNextPage: page < meta.totalPages,
      hasPreviousPage: page > 1,
      totalPages: meta.totalPages,
    };
  } catch (error) {
    console.error("Error fetching paginated blog posts from REST API:", error);
    return {
      posts: [],
      hasNextPage: false,
      hasPreviousPage: false,
      totalPages: 0,
    };
  }
}

/**
 * Fetch a single blog post by slug via REST API.
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { posts } = await fetchWordPressPosts({ slug, perPage: 1 });
    if (!posts || posts.length === 0) {
      return null;
    }
    return transformWordPressPostToBlogPost(posts[0]);
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}" via REST API:`, error);
    return null;
  }
}


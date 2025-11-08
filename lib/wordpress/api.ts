// lib/wordpress/api.ts
import { getApolloClient } from "../apollo-client";
import { GET_ALL_POSTS, GET_POSTS, GET_POST_BY_SLUG } from "./queries";
import { transformWordPressPosts, transformWordPressPostToBlogPost } from "./utils";
import type { WordPressPost, BlogPost, WordPressPostsResponse } from "./types";

/**
 * Fetch all blog posts from WordPress
 * This is used for server-side rendering and initial load
 */
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const client = getApolloClient();
    
    // Clear cache before fetching to ensure fresh data
    client.cache.reset();
    
    const { data } = await client.query<WordPressPostsResponse>({
      query: GET_ALL_POSTS,
      fetchPolicy: "no-cache", // Changed to no-cache for always fresh data
      errorPolicy: "all",
    });

    if (!data?.posts?.edges) {
      return [];
    }

    const posts = data.posts.edges.map((edge) => edge.node);
    return transformWordPressPosts(posts);
  } catch (error) {
    console.error("Error fetching blog posts from WordPress:", error);
    // Return empty array on error to prevent app crash
    return [];
  }
}

/**
 * Fetch paginated blog posts from WordPress
 */
export async function fetchBlogPosts(
  first: number = 10,
  after?: string
): Promise<{
  posts: BlogPost[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor?: string;
}> {
  try {
    const client = getApolloClient();
    
    // Clear cache before fetching
    client.cache.reset();
    
    const { data } = await client.query<WordPressPostsResponse>({
      query: GET_POSTS,
      variables: { first, after },
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });

    if (!data?.posts?.edges) {
      return {
        posts: [],
        hasNextPage: false,
        hasPreviousPage: false,
      };
    }

    const posts = data.posts.edges.map((edge) => edge.node);
    const transformedPosts = transformWordPressPosts(posts);

    return {
      posts: transformedPosts,
      hasNextPage: data.posts.pageInfo?.hasNextPage || false,
      hasPreviousPage: data.posts.pageInfo?.hasPreviousPage || false,
      endCursor: data.posts.pageInfo?.endCursor,
    };
  } catch (error) {
    console.error("Error fetching paginated blog posts from WordPress:", error);
    return {
      posts: [],
      hasNextPage: false,
      hasPreviousPage: false,
    };
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const client = getApolloClient();
    
    // Clear cache before fetching
    client.cache.reset();
    
    const { data } = await client.query<{ postBy: WordPressPost | null }>({
      query: GET_POST_BY_SLUG,
      variables: { slug },
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });

    if (!data?.postBy) {
      return null;
    }

    return transformWordPressPostToBlogPost(data.postBy);
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
}


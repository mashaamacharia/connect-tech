// lib/wordpress/types.ts

export interface WordPressAuthor {
  node: {
    name: string;
  };
}

export interface WordPressImage {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  } | null;
}

export interface WordPressCategory {
  nodes: Array<{
    name: string;
    slug: string;
  }>;
}

export interface WordPressTag {
  nodes: Array<{
    name: string;
    slug: string;
  }>;
}

export interface WordPressPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  modified: string;
  author: WordPressAuthor;
  featuredImage: WordPressImage;
  categories: WordPressCategory;
  tags: WordPressTag;
  content?: string;
}

export interface WordPressPostEdge {
  node: WordPressPost;
}

export interface WordPressPostsResponse {
  posts: {
    pageInfo?: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
    edges: WordPressPostEdge[];
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  link: string;
  image: string;
  author: string;
  date: string;
  slug: string;
  content?: string; // Full HTML content from WordPress
}


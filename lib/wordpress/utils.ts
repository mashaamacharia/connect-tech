// lib/wordpress/utils.ts
import { WordPressPost, BlogPost } from "./types";

/**
 * Format WordPress date to readable format
 */
export function formatWordPressDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Extract excerpt from WordPress post
 * WordPress excerpt might contain HTML, so we clean it up
 */
export function extractExcerpt(excerpt: string, maxLength: number = 200): string {
  // Remove HTML tags
  const text = excerpt.replace(/<[^>]*>/g, "");
  
  // Remove extra whitespace
  const cleaned = text.replace(/\s+/g, " ").trim();
  
  // Truncate if needed
  if (cleaned.length <= maxLength) {
    return cleaned;
  }
  
  // Truncate at word boundary
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + "...";
  }
  
  return truncated + "...";
}

/**
 * Get featured image URL or fallback
 */
export function getFeaturedImageUrl(
  featuredImage: WordPressPost["featuredImage"],
  fallback: string = "/placeholder.svg"
): string {
  if (featuredImage?.node?.sourceUrl) {
    return featuredImage.node.sourceUrl;
  }
  return fallback;
}

/**
 * Transform WordPress post to BlogPost format
 */
export function transformWordPressPostToBlogPost(post: WordPressPost): BlogPost {
  // Extract slug from the post
  const slug = post.slug;
  
  // Create link path (assuming /media/[slug] structure)
  const link = `/media/${slug}`;
  
  // Get featured image or use a default based on slug
  const image = getFeaturedImageUrl(post.featuredImage, `/media/${slug}.png`);
  
  // Get author name
  const author = post.author?.node?.name || "Kannan Kaliyur";
  
  // Format date
  const date = formatWordPressDate(post.date);
  
  // Extract and clean excerpt
  const excerpt = extractExcerpt(post.excerpt || "");
  
  return {
    id: post.id,
    title: post.title || "Untitled",
    excerpt,
    link,
    image,
    author,
    date,
    slug,
  };
}

/**
 * Transform array of WordPress posts to BlogPost format
 */
export function transformWordPressPosts(posts: WordPressPost[]): BlogPost[] {
  return posts.map(transformWordPressPostToBlogPost);
}


import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { fetchBlogPostBySlug } from "@/lib/wordpress/api"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Force dynamic rendering and disable caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await fetchBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Media & Insights - Connect Tech+Talent`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch the blog post from WordPress using the slug
  const post = await fetchBlogPostBySlug(params.slug)

  // If post not found, show 404
  if (!post) {
    notFound()
  }

  // Parse the HTML content from WordPress
  // WordPress returns content as HTML, so we'll render it safely
  const content = post.content || post.excerpt || ""

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Media Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button variant="outline" asChild className="mb-6 bg-transparent">
          <Link href="/media" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Media</span>
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>

          {post.image && (
            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                unoptimized={post.image.startsWith("http")}
              />
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Render WordPress content as HTML */}
          <div 
            className="prose prose-lg max-w-none font-light text-gray-700 leading-relaxed
              [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-6 [&_h1]:mt-8
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mb-4 [&_h2]:mt-6
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-6
              [&_p]:mb-6 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6
              [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-6
              [&_li]:mb-2
              [&_strong]:font-semibold [&_strong]:text-gray-900
              [&_a]:text-blue-600 [&_a]:hover:underline
              [&_img]:rounded-lg [&_img]:my-6 [&_img]:w-full [&_img]:h-auto
              [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Call to Action */}
          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Streamline Your Hiring Process?
            </h3>
            <p className="text-gray-700 font-light mb-4">
              Connect with our team of hiring experts to discuss your talent needs and discover how we can help you
              build a winning team faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact">Book a Meeting with Hiring Consultant</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="mailto:info@connecttechtalent.com">Email: info@connecttechtalent.com</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Or call us at{" "}
              <a href="tel:512-338-1111" className="text-blue-600 hover:underline">
                512-338-1111
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


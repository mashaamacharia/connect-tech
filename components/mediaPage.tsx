"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { fetchAllBlogPosts } from "@/lib/wordpress/api"
import type { BlogPost } from "@/lib/wordpress/types"

const POSTS_PER_PAGE = 6

interface MediaPageClientProps {
  initialPosts?: BlogPost[]
}

export default function MediaPageClient({ initialPosts = [] }: MediaPageClientProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const pageFromUrl = searchParams.get("page")
  const [currentPage, setCurrentPage] = useState(pageFromUrl ? Number.parseInt(pageFromUrl) : 1)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialPosts)
  const [isLoading, setIsLoading] = useState(false)

  // Always fetch fresh data on component mount
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true)
      try {
        // Always fetch fresh data from WordPress (bypasses any caching)
        const posts = await fetchAllBlogPosts()
        console.log("Fetched posts from WordPress:", posts.length)
        if (posts.length > 0) {
          // Always use WordPress data when available
          setBlogPosts(posts)
        } else if (initialPosts.length > 0) {
          // If WordPress returns empty but we have server-side posts, use them
          console.log("Using server-side posts as fallback")
          setBlogPosts(initialPosts)
        } else {
          // No posts available
          console.log("No blog posts available from WordPress")
          setBlogPosts([])
        }
      } catch (error) {
        console.error("Error loading blog posts:", error)
        // On error, try to use initial posts
        if (initialPosts.length > 0) {
          setBlogPosts(initialPosts)
        } else {
          setBlogPosts([])
        }
      } finally {
        setIsLoading(false)
      }
    }

    // Always fetch on mount to get latest data
    loadPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty dependency array - only run on mount

  // Function to manually refresh posts
  const refreshPosts = async () => {
    setIsLoading(true)
    try {
      const posts = await fetchAllBlogPosts()
      if (posts.length > 0) {
        setBlogPosts(posts)
      } else {
        setBlogPosts([])
      }
    } catch (error) {
      console.error("Error refreshing blog posts:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const pageFromUrl = searchParams.get("page")
    const pageNumber = pageFromUrl ? Number.parseInt(pageFromUrl) : 1
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber)
    }
  }, [searchParams, currentPage])

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`${pathname}?${params.toString()}`)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-gray-900">Media & Insights</h1>
              <Button
                variant="outline"
                size="sm"
                onClick={refreshPosts}
                disabled={isLoading}
                className="flex items-center gap-2"
                title="Refresh blog posts"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Refresh</span>
              </Button>
            </div>
            <p className="text-gray-600">
              Explore our latest articles, research, and perspectives on the world of AI talent and technology hiring.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Link key={post.id || post.slug || post.title} href={`${post.link}?page=${currentPage}`} className="block">
                  <Card className="border border-gray-200 flex flex-col overflow-hidden h-full cursor-pointer hover:shadow-lg transition-shadow duration-200">
                    <div className="relative w-full aspect-video bg-gray-100">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized={post.image?.startsWith("http")}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-900">
                        <h3>{post.title}</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <div className="flex items-center space-x-4 metadata-text text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                      <Button variant="outline" className="w-fit mt-auto bg-transparent pointer-events-none">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              {/* Previous button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center space-x-1"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>

              {/* Page numbers */}
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage = page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1

                  if (!showPage && page === 2 && currentPage > 4) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    )
                  }
                  if (!showPage && page === totalPages - 1 && currentPage < totalPages - 3) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    )
                  }
                  if (!showPage) return null

                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className="min-w-[40px]"
                    >
                      {page}
                    </Button>
                  )
                })}
              </div>

              {/* Next button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center space-x-1"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

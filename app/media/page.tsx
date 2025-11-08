import type { Metadata } from "next"
import { Suspense } from "react"
import MediaPageClient from "@/components/mediaPage.tsx"
import { fetchAllBlogPosts } from "@/lib/wordpress/api"
import type { BlogPost } from "@/lib/wordpress/types"

export const metadata: Metadata = {
  title: "Media & Insights | Expert Articles on AI Talent, Tech Hiring & Workforce Trends - Connect Tech+Talent",
  description:
    "Browse the latest insights, hiring strategies, and thought leadership from Connect Tech+Talent. Discover expert articles on AI-driven recruitment, remote work, and the future of tech teams.",
  keywords: [
    "AI hiring insights",
    "tech recruitment articles",
    "AI workforce trends",
    "remote work research",
    "staffing agency guides",
    "Connect Tech+Talent media",
    "technology hiring strategies",
    "AI leadership perspectives",
  ],
  alternates: {
    canonical: "https://cttv2.manymangoes.com.au/media",
  },
  openGraph: {
    title: "Media & Insights | Expert Articles on AI Talent, Tech Hiring & Workforce Trends - Connect Tech+Talent",
    description:
      "Explore our latest articles and research on AI talent acquisition, workforce transformation, and technology hiring trends — written by Connect Tech+Talent experts.",
    url: "https://cttv2.manymangoes.com.au/media",
    siteName: "Connect Tech+Talent",
    type: "website",
    images: [
      {
        url: "https://cttv2.manymangoes.com.au/og/media.png",
        width: 1200,
        height: 630,
        alt: "Connect Tech+Talent Media & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Insights | Connect Tech+Talent",
    description:
      "Read expert-led insights on AI hiring, tech workforce trends, and digital transformation — powered by Connect Tech+Talent.",
    images: ["https://cttv2.manymangoes.com.au/og/media.png"],
    creator: "@ConnectTechTalent",
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Force dynamic rendering and disable caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function MediaPage() {
  // Fetch blog posts from WordPress on the server
  // This will fetch fresh data on every request (no caching)
  let initialPosts: BlogPost[] = []
  
  try {
    initialPosts = await fetchAllBlogPosts()
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    // If WordPress is unavailable, initialPosts will be empty array
    // The component will handle this gracefully
  }

  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <MediaPageClient initialPosts={initialPosts} />
    </Suspense>
  )
}

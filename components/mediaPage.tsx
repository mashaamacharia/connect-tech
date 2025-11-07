"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { fetchAllBlogPosts } from "@/lib/wordpress/api"
import type { BlogPost } from "@/lib/wordpress/types"

// Fallback blog posts (used if WordPress is unavailable)
const fallbackBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "staffing-agency-hiring-simpler-faster",
    title: "How Does a Staffing Agency Make Hiring Simpler and Faster?",
    excerpt:
      "Whether you are running a small business or a large enterprise, you would agree that building a workforce is not an overnight process. Reviewing applications for different job postings, pre-screening candidates, interviewing the shortlisted ones, and then providing an offer letter, there are several steps involved in hiring the right people...",
    link: "/media/staffing-agency-hiring-simpler-faster",
    image: "/media/staffing-agency-hiring.png",
    author: "Kannan Kaliyur",
    date: "September 9, 2025",
  },
  {
    id: "2",
    slug: "employee-referrals-hiring-strategy",
    title: "Impact of Employee Referrals on Your Hiring Strategy",
    excerpt:
      "Active recruitment is a crucial activity in almost every organization that sets the pace of business operations. But to maintain the recruitment cycle, your hiring team works hard to post job ads, pre-screen qualified candidates, and conduct interviews before the final selection...",
    link: "/media/employee-referrals-hiring-strategy",
    image: "/media/employee-referrals.png",
    author: "Kannan Kaliyur",
    date: "September 16, 2025",
  },
  {
    id: "3",
    slug: "connecttel-becomes-connect-tech-talent",
    title: "ConnectTel Becomes Connect Tech+Talent",
    excerpt:
      "ConnectTel is being rebranded to Connect Tech & Talent because this closely reflects the services that we provide to clients in the tech hiring space. Learn about our evolution from technology projects to building winning teams...",
    link: "/media/connecttel-becomes-connect-tech-talent",
    image: "/media/connecttel-rebranding.png",
    author: "Kannan Kaliyur",
    date: "September 21, 2025",
  },
  {
    title: "The Future of Digital Team Building and Remote Workspace",
    excerpt:
      "Running an organization starts with embracing team efforts to achieve common goals. Whether you already have an established business or are looking forward to building your dream company, you've come to the right place...",
    link: "/media/digital-team-building-remote-workspace",
    image: "/media/digital-team-building.png",
    author: "Kannan Kaliyur",
    date: "May 21, 2025",
  },
  {
    title: "Top 20 Remote Work Statistics and Trends for 2025",
    excerpt:
      "During and beyond the multiple waves of the pandemic, we all have heard that the remote work environment is here to stay. Many of you now want to continue working from home even when the offices have reopened...",
    link: "/media/remote-work-statistics-trends-2024",
    image: "/media/remote-work-statistics.png",
    author: "Kannan Kaliyur",
    date: "September 21, 2025",
  },
  {
    title: "7 Tips to Shortlist Software Engineering Candidates & Reduce Hiring Time",
    excerpt:
      "Employees are indeed the most valuable asset your organization can have. The skills and expertise they bring to the table to maintain and even improve business operations have a lasting impact on business growth...",
    link: "/media/shortlist-software-engineering-candidates",
    image: "/media/shortlist-candidates.jpg",
    author: "Kannan Kaliyur",
    date: "March 31, 2025",
  },
  {
    title: "How to Modify Your Resume for Remote IT Job Opportunities?",
    excerpt:
      "Indeed, a well-written resume is a crucial part of getting selected for a web or software developer job. It requires you to highlight your technical skills, coding languages known, remote work experience, and major accomplishments...",
    link: "/media/resume-modification-remote-it",
    image: "/media/resume-modification.png",
    author: "Kannan Kaliyur",
    date: "April 11, 2025",
  },
  {
    title: "Top 10 Ways to Improve Remote Team Meetings and Work Productivity",
    excerpt:
      "If you have ever been a part of a too-long, pointless meeting that led to no good results, you would agree that meetings are just as likely to be a time-wasting activity as it is to be a healthy, productive session focused on a certain goal...",
    link: "/media/remote-team-meetings-productivity",
    image: "/media/remote-team-meetings.png",
    author: "Kannan Kaliyur",
    date: "May 16, 2025",
  },
  {
    title: "Reimagining the Future of Workplace for a Remote Workforce",
    excerpt:
      "While some organizations are continuing to thumb their noses at the loss of the best talent during the Great Resignation period, others insist that the writing is on the wall. Remote work culture brought into the scene during the pandemic is here to stay...",
    link: "/media/reimagining-remote-workforce",
    image: "/media/hybrid-office-workspace.png",
    author: "Kannan Kaliyur",
    date: "May 16, 2025",
  },
  {
    title: "Hiring During A Recession: Why It's a Great Opportunity",
    excerpt:
      "The series of layoffs in some of the biggest companies in the world has made the economy stutter. After the banner year most industries experienced in 2021, layoffs are becoming everyday news around the globe...",
    link: "/media/hiring-during-recession",
    image: "/media/recession-opportunity.png",
    author: "Kannan Kaliyur",
    date: "January 1, 2025",
  },
  {
    title: "7 Strategies for Effective Hiring in the Age of Globalization",
    excerpt:
      "The current state of globalization is like a swift and strong wave. It's touching a lot of frontiers and changing them into an entirely new state. The world we see now is a world with melted boundaries, higher collaboration and faster communication than ever before...",
    link: "/media/globalization-hiring-strategies",
    image: "/media/globalization-hiring.jpeg",
    author: "Kannan Kaliyur",
    date: "January 18, 2025",
  },
  {
    title: "Lessons Learned from 27 Years of Tech Staffing",
    excerpt:
      "January 16 marks the 27th anniversary of Connect Tech+Talent. To mark this milestone, the team asked CEO Kannan Kaliyur to share some of the biggest lessons and surprises he encountered along the way...",
    link: "/media/lessons-learned-27-years",
    image: "/media/27-years-anniversary.png",
    author: "Kannan Kaliyur",
    date: "January 16, 2025",
  },
  {
    title: "5 Reasons Why Businesses Need to Embrace Video Interviews",
    excerpt:
      "Introduction – How the pandemic ushered in the big shift to video screens in our everyday work and life. Distancing measures, lockdown in schools, businesses, and overall social life...",
    link: "/media/video-interviews-businesses",
    image: "/media/video-interviews.png",
    author: "Kannan Kaliyur",
    date: "January 21, 2025",
  },
  {
    title: "Nearshore vs. Offshore Resources: Which Recruiting Model Works for Your Business?",
    excerpt:
      "The nature of modern businesses is quite competitive and increasingly digital, which is why the need to scale skills and resources can be tricky to balance within budget constraints...",
    link: "/media/nearshore-vs-offshore-resources",
    image: "/media/nearshore-vs-offshore.png",
    author: "Kannan Kaliyur",
    date: "January 25, 2025",
  },
  {
    title: "How Can Effective Screening Reduce Time to Hire?",
    excerpt:
      "The success of any company involves onboarding the best talent to steer the operations in the right direction. However, with job-hopping on the rise, many talent acquisition teams are trying harder and harder to find the right people...",
    link: "/media/effective-screening-time-to-hire",
    image: "/media/time-to-hire.png",
    author: "Kannan Kaliyur",
    date: "March 8, 2025",
  },
  {
    title: "7 Recruiting Strategies to Build a Top Tech Team",
    excerpt:
      "Finding the right talent and assembling a top tech team is essential for achieving success in the digital age. Today, organizations need to source skilled individuals with expertise in multiple areas of technology...",
    link: "/media/recruiting-strategies-tech-team",
    image: "/media/recruiting-strategies.png",
    author: "Kannan Kaliyur",
    date: "March 15, 2025",
  },
  {
    title: "How Important is Cultural Fit for Employee Retention?",
    excerpt:
      "In the dynamic and competitive world of business, the quest for the ideal candidate extends beyond simply assessing technical expertise...",
    link: "/media/cultural-fit-employee-retention",
    image: "/media/cultural-fit.png",
    author: "Kannan Kaliyur",
    date: "March 23, 2025",
  },
  {
    title: "How Nearshore Outsourcing Can Help Your Business Grow?",
    excerpt:
      "As the cost of talent acquisition continues to increase, businesses across numerous sectors are turning to outsourcing as a viable solution...",
    link: "/media/nearshore-outsourcing",
    image: "/media/nearshore-outsourcing.png",
    author: "Kannan Kaliyur",
    date: "March 29, 2025",
  },
  {
    title: "5 Ways to Leverage Behavioral Interviewing Techniques in Tech Hiring",
    excerpt:
      "Navigating the tech hiring landscape can be a daunting task, especially when searching for a candidate who brings both technical prowess and the right behavioral attributes to the table...",
    link: "/media/behavioral-interviewing-techniques",
    image: "/media/behavioral-interviewing.png",
    author: "Kannan Kaliyur",
    date: "April 26, 2025",
  },
  {
    title: "9 Key Metrics To Track Employee Productivity In The Digital Workplace",
    excerpt:
      "In today's ever-evolving digital landscape, keeping tabs on employee productivity is more crucial than ever. But how can you effectively track employee productivity in a remote work environment?",
    link: "/media/employee-productivity-metrics",
    image: "/media/employee-productivity.png",
    author: "Kannan Kaliyur",
    date: "April 26, 2025",
  },
  {
    title: "Winning Resume Strategies: Expert Briefing from Kannan Kaliyur (CEO of Connect Tech+Talent)",
    excerpt:
      "In the challenging landscape of job hunting, a winning resume is your ticket to capturing the attention of recruiters and landing that dream job...",
    link: "/media/winning-resume-strategies",
    image: "/media/resume-strategies.png",
    author: "Kannan Kaliyur",
    date: "June 20, 2025",
  },
  {
    title: "Beyond Code: The Rising Importance of Soft Skills in Tech Hiring",
    excerpt:
      "The digital age is more than just bits and bytes; it's a melting pot of human interaction, team dynamics, and leadership, where soft skills often take center stage...",
    link: "/media/soft-skills-tech-hiring",
    image: "/media/soft-skills-tech-hiring.png",
    author: "Kannan Kaliyur",
    date: "January 15, 2025",
  },
  {
    title: "Unlocking Tech Talent: A Recruiter's Guide to Hiring a Full Stack Developer",
    excerpt:
      "Hiring full stack developers can be a complex puzzle, particularly in the thriving tech hub of Austin. Full stack developers, unlike specialized counterparts, hold a comprehensive suite of skills encompassing all critical aspects of a project...",
    link: "/media/unlocking-tech-talent-full-stack-developer",
    image: "/media/full-stack-hiring.png",
    author: "Kannan Kaliyur",
    date: "January 15, 2025",
  },
  {
    title: "Hire Top Web Developers in Austin: A Recruiter's Guide",
    excerpt:
      "The bustling tech scene in Austin, famous for its developer flexibility and high-performance tech startups, has made web developers some of the most sought-after professionals in the industry...",
    link: "/media/hire-web-developers-austin",
    image: "/media/web-developer-hiring.png",
    author: "Kannan Kaliyur",
    date: "May 17, 2025",
  },
  {
    title: "Comprehensive Salary Negotiation Tips for a Winning Offer",
    excerpt:
      "In the intricate maze of job hunting, one challenge often stands out as a difference-maker: Salary negotiation. Learn strategic insights for recognizing and communicating your intrinsic worth...",
    link: "/media/salary-negotiation-tips",
    image: "/media/salary-negotiation-tips.jpeg",
    author: "Kannan Kaliyur",
    date: "April 3, 2025",
  },
  {
    title: "Decoding Recruitment: Critical Skills vs. Regular Skills Showdown",
    excerpt:
      "Distinguishing between critical skill hiring and regular skill hiring is more than just understanding two different recruitment terminologies. It's about recognizing the nuances in focus, approach, and criteria...",
    link: "/media/critical-skills-vs-regular-skills",
    image: "/media/critical-hiring-vs-regular-hiring.jpeg",
    author: "Kannan Kaliyur",
    date: "September 27, 2023",
  },
  {
    title: "Mastering AI-Driven Hiring in the Modern Era",
    excerpt:
      "In the dynamic world of recruitment, staying ahead means embracing innovation. Artificial Intelligence (AI) has emerged as a transformative force, reshaping how organizations approach hiring...",
    link: "/media/mastering-ai-driven-hiring",
    image: "/media/mastering-ai-driven-hiring.jpeg",
    author: "Kannan Kaliyur",
    date: "July 15, 2025",
  },
  {
    title: "Tech Hiring in the Era of New Work Trends",
    excerpt:
      "In today's dynamic tech landscape, understanding the shifts and nuances that define the industry is paramount. The world of work has seen a significant metamorphosis...",
    link: "/media/tech-hiring-new-work-trends",
    image: "/media/tech-hiring-new-work-trends-updated.jpeg",
    author: "Kannan Kaliyur",
    date: "July 22, 2025",
  },
  {
    id: "27",
    slug: "evolving-hr-technologies",
    title: "Evolving HR Technologies & Their Impact On Hiring",
    excerpt:
      "In the dynamic world of recruitment, the tools and strategies that drive the hiring process are constantly evolving. As businesses strive to find the best talent, they're turning to cutting-edge HR technologies...",
    link: "/media/evolving-hr-technologies",
    image: "/media/evolving-hr-technologies.jpeg",
    author: "Kannan Kaliyur",
    date: "July 29, 2025",
  },
].map((post, index) => ({
  ...post,
  id: post.id || `fallback-${index + 1}`,
  slug: post.slug || post.link.replace("/media/", ""),
}))

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

  // Fetch posts from WordPress if initialPosts is empty
  useEffect(() => {
    const loadPosts = async () => {
      if (initialPosts.length === 0) {
        setIsLoading(true)
        try {
          const posts = await fetchAllBlogPosts()
          setBlogPosts(posts.length > 0 ? posts : fallbackBlogPosts)
        } catch (error) {
          console.error("Error loading blog posts:", error)
          // Use fallback posts if WordPress is unavailable
          setBlogPosts(fallbackBlogPosts)
        } finally {
          setIsLoading(false)
        }
      } else {
        setBlogPosts(initialPosts)
      }
    }

    loadPosts()
  }, [initialPosts])

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
            <h1 className="text-gray-900 mb-4">Media & Insights</h1>
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

"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function ConnectTelClientPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Media Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button variant="outline" asChild className="mb-6 bg-transparent">
          <Link href={`/media?page=${page}`} className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Media</span>
          </Link>
        </Button>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/media/connecttel-rebranding.png"
              alt="ConnectTel Becomes Connect Tech+Talent - Professional handshake representing business partnership"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-gray-900 mb-4 text-balance">ConnectTel Becomes Connect Tech+Talent</h1>

            <div className="flex items-center space-x-4 metadata-text mb-6">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Kannan Kaliyur</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>September 21, 2025</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg">
            <p className="mb-6">
              ConnectTel is being rebranded to Connect Tech & Talent because this closely reflects the services that we
              provide to clients in the tech hiring space.
            </p>

            <p className="mb-6">
              ConnectTel was started in 1996 by engineers to help companies solve technology problems. As our track
              record on projects grew, companies sought to hire our skilled technology professionals to join their team.
              Gradually our focus shifted from executing technology projects to helping companies build winning teams.
            </p>

            <p className="mb-6">
              Connect Tech & Talent's mission is to help clients by connecting them with the right talent and technology
              to ensure the success of their projects. For candidates, we connect you with the right employer and role
              that will help you reach your goals faster.
            </p>

            <p className="mb-6">
              As we move towards our third decade as a business, we recognize our services and focus has changed – to
              keep up with evolving technologies and our customer needs. We believe that Connect Tech & Talent is the
              best representation of who we are and what we do.
            </p>

            <p className="mb-8">
              Today with 20+ years of tech hiring track record coupled with 200k+ of internal candidate database,
              Connect Tech & Talent is geared to handle the upcoming market challenges and help the clients build high
              performing teams.
            </p>

            {/* Call to Action */}
            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h3 className="text-gray-900 mb-4">Ready to Build Your Tech Team?</h3>
              <p className="mb-4">
                Connect with our hiring experts to discuss your talent needs and discover how we can help you build a
                winning team.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Book a Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function SalaryNegotiationClientPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"
  const backToMediaUrl = `/media${page !== "1" ? `?page=${page}` : ""}`

  return (
    <>
      <nav className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" asChild>
            <Link href={backToMediaUrl} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Media
            </Link>
          </Button>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="badge-text text-primary mb-2">Article</p>
            <h1 className="text-gray-900 mb-4">Comprehensive Salary Negotiation Tips for a Winning Offer</h1>
            <div className="flex items-center space-x-4 metadata-text">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Kannan Kaliyur</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>April 3, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 overflow-hidden rounded-lg border border-gray-200 bg-white">
              <Image
                src="/media/salary-negotiation-tips.jpeg"
                alt="Salary Negotiation Tips For A Winning Offer"
                width={1200}
                height={675}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="text-gray-600">
              <p className="mb-6">
                In the intricate maze of job hunting, one challenge often stands out as a difference-maker: Salary
                negotiation. Kannan Kaliyur, the founder of Connect Tech+Talent, offers unique insights drawn from a
                distinguished 27-year career in tech staffing and recruitment. His perspective transcends the usual
                advice. To Kaliyur, salary negotiation tips are less about advocating for a higher figure and more about
                recognizing and communicating one's intrinsic worth. It's about seeing beyond mere numbers and
                understanding the dance of mutual respect and value recognition between the potential employee and the
                employer.
              </p>

              <p className="mb-8">
                Diving deeper into his wisdom, two core principles emerge. First, the importance of preparation. In the
                high-stakes game of salary discussions, one shouldn't act merely reactively. Armed with strategy and
                foresight, approach it as a seasoned strategist, looking at the bigger picture. Second, it's essential
                to understand the dual significance of these negotiations. They aren't just about immediate
                remuneration. They set the tone for professional growth, benefits, and future discussions. As you delve
                into the subsequent sections of this blog, keep Kaliyur's insights in mind. With the right approach to
                how to negotiate a salary offer, you're not just navigating present negotiations but laying the
                groundwork for future career advancements.
              </p>

              <h2 className="mt-8 mb-4">1. The Power of a Strong First Impression</h2>
              <p className="mb-6">
                Navigating the complex arena of salary negotiations begins long before the discussion of numbers. Kannan
                Kaliyur, an industry luminary, emphasizes that the path to mastering how to negotiate a salary offer
                starts with making an impeccable first impression during the interview process. Here's why:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                A. Engaging Everyone in the Interview Process
              </h3>
              <p className="mb-6">
                It isn't just the hiring manager or HR representative you need to impress. Every interaction, every
                person you meet during the process, plays a role in the eventual salary negotiation tips you'll employ.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">1. Thank-You Letters:</strong> A post-interview
                thank-you note does more than express gratitude. It sets you apart and reinforces your genuine interest
                in the role, making your position stronger when negotiating salary.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">2. Ask Insightful Questions:</strong> When you inquire
                deeply and specifically about the job and company, it signals your commitment and homework. Such
                preparation can give you an edge when discerning how to counter offer salary effectively.
              </p>

              <p className="mb-8">
                <strong className="text-gray-900 font-semibold">3. Building Rapport:</strong> It's a simple gesture, but
                acknowledging everyone's presence and using their names establishes rapport. This connection isn't just
                for the immediate role but can be pivotal when you're figuring out how to negotiate a job offer and its
                many components.
              </p>

              <h2 className="mt-8 mb-4">2. Evaluating the Company Before Negotiating</h2>
              <p className="mb-6">
                As Kannan Kaliyur often elucidates, salary negotiations aren't conducted in a vacuum. An integral part
                of the salary negotiation tips he offers hinges on understanding the broader context—both of the company
                you're engaging with and the specific role you're vying for.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">A. Understanding Company Finances</h3>
              <p className="mb-6">
                One can't effectively determine how to negotiate a salary offer without a clear picture of the company's
                financial health.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">1. Relevance to Negotiations:</strong> Grasping the
                company's revenue, profitability, and market share can arm you with pertinent data. This information
                forms the bedrock of your salary negotiation tips.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">2. Private Companies:</strong> There's a misconception
                that financial details of private firms are inaccessible. Kaliyur stresses that, when positioning
                yourself and negotiating salary offer, you shouldn't hesitate to ask. Respectfully seeking this
                information emphasizes your due diligence.
              </p>

              <p className="mb-8">
                <strong className="text-gray-900 font-semibold">3. Your Role's Value:</strong> When you understand where
                you fit in the financial mosaic of a company, you're better equipped on how to counter offer salary.
                It's not just about your worth but about your value to the company's bottom line.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                B. Understanding the Role and its Significance
              </h3>
              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">1. Role Insights:</strong> Gaining knowledge about the
                deadlines, challenges, and nuances of your potential position isn't just about job readiness. These
                insights empower you when determining how to negotiate a job offer.
              </p>

              <p className="mb-8">
                <strong className="text-gray-900 font-semibold">2. Your Criticality:</strong> Recognizing how pivotal
                you are to the company isn't an ego play; it's a strategic one. When you're aware of your
                indispensability, it adds a layer of depth to your approach to negotiating salary offers.
              </p>

              <h2 className="mt-8 mb-4">3. The Delicate Dance of Discussing Numbers</h2>
              <p className="mb-6">
                When you reach the stage of talking numbers, the landscape of job negotiations takes on a nuanced
                choreography. Kannan Kaliyur breaks down this intricate dance step by step with his vast reservoir of
                insights.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">A. Initial Offer Conversations</h3>
              <p className="mb-6">
                Navigating the initial offer requires a blend of tact, preparation, and patience—skills central to
                Kannan's salary negotiation tips.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">1. Receiving the Offer:</strong> Upon being presented
                with a figure, resist the urge to react immediately. It's vital to maintain composure, acknowledging the
                offer with professionalism.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">2. The Virtue of Patience:</strong> According to Kannan,
                one's power in determining how to negotiate a salary offer lies in the pauses. Hold off on an immediate
                reply. This deliberate pause not only shows contemplation but can also work in your favor.
              </p>

              <p className="mb-8">
                <strong className="text-gray-900 font-semibold">3. Crafting Your Query:</strong> Instead of an outright
                acceptance or refusal, ask, "Is this salary negotiable or is it the final offer?" This positions you as
                open, yet discerning, emphasizing your interest in a dialogue rather than a one-sided decision.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">B. Counter Offering Strategies</h3>
              <p className="mb-6">
                Deciphering how to counter offer salary is an art, painted with the strokes of strategy, timing, and
                communication.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">1. The Value of Reflection:</strong> It's tempting to
                counter immediately, especially if you feel undervalued. However, always take time to "work out the
                numbers." This not only gives you a clearer perspective but also communicates your thoroughness.
              </p>

              <p className="mb-8">
                <strong className="text-gray-900 font-semibold">2. Constructive Questioning:</strong> Kaliyur recommends
                shifting from vague queries like "is there anything you can do?" to more direct, yet tactful, questions.
                It's not just about negotiating salary offer; it's about articulating your worth and expectations
                clearly.
              </p>

              <h2 className="mt-8 mb-4">4. Beyond the Basic Salary: Navigating Additional Benefits</h2>
              <p className="mb-6">
                The intricate dance of salary negotiation, as outlined by Kannan Kaliyur, isn't confined to the base
                figure you see in your offer letter. True mastery in how to negotiate a job offer emerges when you look
                beyond the base and delve into the full spectrum of the compensation package.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">A. The Bonus Conversation</h3>
              <p className="mb-6">
                Often, bonuses can significantly influence the attractiveness of an offer, offering a substantial boost
                to your overall compensation.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">1. Sign-on Bonus Consideration:</strong> When evaluating
                how to negotiate salary offers, don't neglect to discuss the potential for a sign-on bonus. This not
                only supplements your initial compensation but also signifies the company's investment in onboarding
                you.
              </p>

              <p className="mb-8">
                <strong className="text-gray-900 font-semibold">2. Yearly Bonuses:</strong> Regular performance-based
                bonuses can markedly enhance your earnings over time. As part of Kaliyur's salary negotiation tips, it's
                vital to understand how these bonuses are calculated, their frequency, and what they mean for your total
                compensation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                B. Connect Tech+Talent's Role in the Negotiation Process
              </h3>
              <p className="mb-6">
                Having an experienced third-party advocate, like Connect Tech+Talent, can be an invaluable asset when
                negotiating salary offers or navigating the broader compensation discussion.
              </p>

              <p className="mb-4">
                <strong className="text-gray-900 font-semibold">1. Guided Support:</strong> While you bring your
                expertise to the table, entities like Connect Tech+Talent complement that with an industry-wide
                perspective, offering guidance on competitive rates and benefits.
              </p>

              <p className="mb-8">
                <strong className="text-gray-900 font-semibold">2. Negotiation Nuances:</strong> Kaliyur's insights
                underscore the role of seasoned intermediaries in ensuring a smooth negotiation phase. They not only
                assist in knowing how to counter offer salary effectively but also provide a buffer, ensuring that
                discussions remain productive and professional.
              </p>

              <h2 className="mt-8 mb-4">Conclusion</h2>
              <p className="mb-6">
                In the nuanced realm of salary negotiation tips, preparation remains paramount. Kannan Kaliyur
                consistently underscores the significance of being well-armed with information and strategy when
                deliberating how to negotiate a job offer. Yet, beyond the tactics and tips, it's essential to
                appreciate that negotiating salary isn't a one-sided endeavor. As you step into these conversations,
                remember that both parties—the prospective employee and employer—bring value to the table. So, when you
                consider how to negotiate a salary offer or ponder how to counter an offer salary, view it as a
                collaborative dialogue, not a confrontation. By adopting this mindset and integrating the aforementioned
                salary negotiation tips, you not only enhance your chances of securing a favorable package but also lay
                the groundwork for a positive, reciprocal professional relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-slate-900 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4">How can Connect Tech+Talent Help?</h3>
              <p className="text-gray-300 mb-6">
                Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
                takes the overbearing burden of finding human resources with the right skill set and lets companies
                focus on their core business. We specialise in IT jobs, helping businesses build and ramp up their
                technical staffing. We help build entire teams with the right set of skills in the technology that best
                suits their business. We at Connect Tech+Talent will also help you as a candidate to acquire most sought
                after technical skills and forward your candidature to leading enterprises with global reach.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-slate-900" asChild>
                <Link href="https://calendly.com/ankushg-connecttechtalent/30min?month=2025-07&date=2025-07-09">
                  Book a Meeting with a Hiring Consultant <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

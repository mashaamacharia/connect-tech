"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function HiringDuringRecessionClientPage() {
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

      {/* Article Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/media/recession-hiring-opportunity.png"
              alt="Hiring During A Recession: Why It's a Great Opportunity"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="mb-4 text-balance">Hiring During A Recession: Why It's a Great Opportunity</h1>

          <div className="flex items-center space-x-4 metadata-text mb-8">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>Kannan Kaliyur</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>January 1, 2025</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              The series of layoffs in some of the biggest companies in the world has made the economy stutter. After
              the banner year most industries experienced in 2021, layoffs are becoming everyday news around the globe.
              You might have heard of:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Amazon announcing mass layoff plans for around 1% of its global workforce</li>
              <li>Meta's mass layoffs after its shares lost two-thirds of their value</li>
              <li>
                Twitter laying off nearly half of its global employees – the largest mass layoff by any tech company in
                2022
              </li>
              <li>Microsoft laying off less than 1% of its sizeable workforce</li>
            </ul>

            <p className="mb-6">
              As of late November 2022, around 85,000 tech workers in the U.S. were laid off in mass job cuts so far
              (Source: Crunchbase), making many others fear losing their jobs. Indeed, mass layoffs bring forward
              difficult times for many employees but are a common occurrence in the world of business. The recent big
              tech layoffs have their possible origins in:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>The pandemic boom led to an increase in demand.</li>
              <li>
                Over-hiring during the last two years with the assumption that demand for everything would stay high
              </li>
              <li>The fear of recession</li>
              <li>The market volatility resulting from the Russia-Ukraine war</li>
              <li>The increasing inflation impacting different world economies</li>
            </ul>

            <p className="mb-8">
              Are you wondering what's good in all this bad news for your business? Well, you can plan for strategic
              hiring during an economic downturn. Let's answer all the questions going through your mind during this
              difficult time.
            </p>

            <h2 className="mb-4 mt-12">Challenges related to Permanent Recruiting During a Recession</h2>

            <p className="mb-6">
              Until recently, people in the U.S. have enjoyed the fruits of a steady economy. Now that it has contracted
              severely and is struggling to recover, the result is a higher unemployment rate and mass layoffs. If you
              look at the hiring expenses in the private or public sector, it doesn't only involve remuneration.
            </p>

            <p className="mb-6">
              Rather, the overall cost of hiring a permanent employee also includes the expenses related to job
              postings, hiring campaigns, the compensation payable, and various other employee benefits. All these
              aspects are difficult considerations for a hiring team that knows their company is in cost-cutting mode
              due to fear of recession.
            </p>

            <p className="mb-8">
              With many job seekers searching for their next employers, you can tap into the opportunity to hire talent
              that is rarely available otherwise. Are you wondering which way to go during the economic slowdown? Switch
              from permanent recruiting to contract staffing.
            </p>

            <h2 className="mb-4 mt-12">
              Here's Why Contract Staffing Works Better Than Permanent Hiring in Economic Slowdown
            </h2>

            <p className="mb-6">
              Contract staffing basically refers to the hiring arrangement in which individuals are hired per the terms
              detailed in a contract. In other words, you follow contract staffing when you hire a reliable staffing
              agency to provide a non-permanent staff for your business. This type of hiring is mostly project-based and
              the talented individuals will work for your company via the staffing agency based on the B2B contract you
              sign with it.
            </p>

            <p className="mb-6">
              Here's how contract staffing can benefit your organization during an economic downturn:
            </p>

            <h3 className="mb-4 mt-8">Enhanced Hiring Speed</h3>

            <p className="mb-6">
              The traditional hiring process involves candidate shortlisting, interviews, vetting, internal sign-off,
              and then final onboarding. All these steps take a lot of time that can be saved with contract staffing.
              Here, the selected staffing agency will prepare the roster and ensure that they are ready to work for you
              as quickly as possible. Following this hiring approach will be quite useful for you if you own a startup
              and want to focus more on accelerated growth.
            </p>

            <h3 className="mb-4 mt-8">Reduced Labor Cost</h3>

            <p className="mb-6">
              If you want to know about the details of financial perks given to any of your permanent employees, look at
              their employment compensation package. Clearly, their monthly pay isn't the only thing your company pays
              for. There is insurance, wellness programs, training programs, food, and more.
            </p>

            <p className="mb-6">
              On the other hand, when you only have a contract-based staff, you will need to pay for their services
              based on the current labor market prices. Staffing agencies also have compliant payment and invoicing
              arrangements in place to make things easier for you.
            </p>

            <h3 className="mb-4 mt-8">Simplified Hiring for Overseas Markets</h3>

            <p className="mb-6">
              To recession-proof your business, you might want to expand its reach to the global markets. Again, it will
              require you to hire the best talent in different geographical locations. Although you may have a good
              understanding of the local labor market, it's possible that you will have many questions when hiring
              overseas employees.
            </p>

            <p className="mb-6">
              Extending the reach and network of a renowned staffing agency beyond geographical borders can make hiring
              easier, whether nationally or internationally. On the way to becoming a large multinational organization,
              your company can benefit more from contract staffing.
            </p>

            <h3 className="mb-4 mt-8">Easy Accomplishment of Short-term Business Goals</h3>

            <p className="mb-6">
              Short-term business goals can be fulfilled in less time and do not require organizations to hire more
              permanent employees to accomplish them all. For a dedicated labor force for time-based projects, hiring
              contract-based staff makes sense. You need not shoulder any responsibilities around keeping the hired
              staff once the project is over.
            </p>

            <p className="mb-6">
              Whether or not the contractual staff will get work opportunities for other projects at a later date
              depends on their contract with the staffing agency.
            </p>

            <h3 className="mb-4 mt-8">Flexible Workforce Management</h3>

            <p className="mb-6">
              The bigger your team is, the more challenges you will face in relation to managing the workforce. For most
              employees and employers, their organization is no less than an extended family. Similar to your personal
              lives, there can be chaos related to employee perks, appraisals, hiring, and more.
            </p>

            <p className="mb-6">
              With a staffing agency by your side for contractual staffing, you can share the workforce management
              responsibilities. This will ultimately lead to lower operational costs and continued growth of your
              business.
            </p>

            <h3 className="mb-4 mt-8">Contract Staffing Means Savings on Employee's Compensation & Other Benefits</h3>

            <p className="mb-6">
              When you hire a permanent employee, you are liable to pay various types of benefits, including cash
              compensation, life insurance, retirement plans, and paid leave. When you switch from permanent staffing to
              contract staffing, it does not mean the employees won't get these benefits. Instead, the onus of providing
              these benefits shifts to the staffing agency.
            </p>

            <p className="mb-8">
              The cost savings that happen by switching to this hiring approach can be utilized for other business
              needs, including growth planning and operational expansion. This is quite important to continue the pace
              of hiring during economic downtime.
            </p>

            <h2 className="mb-4 mt-12">How Can You Benefit from Hiring Freezes During Economic Slowdowns?</h2>

            <p className="mb-6">
              Another side of global-scale layoffs is the availability of talent pools. When a company is laying off a
              portion of its talented workforce, those individuals will be open to working for another suitable
              organization to attain financial stability. If you feel your hiring team is always on the lookout for the
              best talent, now is the time to make your hiring process more efficient to make the right hiring
              decisions.
            </p>

            <p className="mb-6">
              In a digitally-connected world, job seekers while searching for the right job openings, also expect the
              right companies to find them based on the match between their skills and job requirements. In other words,
              you should also level up your hiring game to onboard the best talent that has become jobless due to
              external market conditions.
            </p>

            <p className="mb-8">
              As you increase your hiring efficiency, there will be opportunities to retain employees for the long run
              and focus on business growth.
            </p>

            <h2 className="mb-4 mt-12">
              Amplify Your Hiring Process During Economic Slowdown with Connect Tech+Talent
            </h2>

            <p className="mb-6">
              As a business owner, you might have realized there's always a chance to improve the way you hire more
              people in your team. When it is about making time-sensitive hiring decisions, give wings to your hiring
              process with the help of Connect Tech+Talent – a leading Austin-based staffing agency.
            </p>

            <h3 className="mb-4 mt-8">How can Connect Tech+Talent Help?</h3>

            <p className="mb-6">
              Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
              takes the overbearing burden of finding human resources with the right skill set and lets companies focus
              on their core business. We specialise in IT jobs, helping businesses build and ramp up their technical
              staffing. We help build entire teams with the right set of skills in the technology that best suits their
              business.
            </p>

            <p className="mb-8">
              We at Connect Tech+Talent will also help you as a candidate to acquire most sought after technical skills
              and forward your candidature to leading enterprises with global reach.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12 mb-8">
              <h3 className="mb-4">Ready to Transform Your Hiring Strategy?</h3>
              <p className="mb-6">
                Book a meeting with our hiring consultant to discuss how we can help you navigate the current economic
                landscape and build your ideal team.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Book a Meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

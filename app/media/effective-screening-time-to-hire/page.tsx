"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function EffectiveScreeningTimeToHirePage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"
  const backToMediaUrl = `/media${page !== "1" ? `?page=${page}` : ""}`

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Media Button */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild className="bg-white">
            <Link href={backToMediaUrl} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Media</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
              How Can Effective Screening Reduce Time to Hire?
            </h1>

            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Kannan Kaliyur</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>March 8, 2025</span>
              </div>
            </div>

            <div className="relative w-full aspect-video mb-8 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/media/time-to-hire.png"
                alt="Professional businessman pointing to clock representing time to hire efficiency"
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg">
            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              The success of any company involves onboarding the best talent to steer the operations in the right
              direction. However, with job-hopping on the rise, many talent acquisition teams are trying harder and
              harder to find the right people and avoid operational disruptions. As the Great Resignation continues,
              most employees now have new expectations from their employers and they are leaving their jobs in search of
              better work-life balance and flexibility. The next challenge in line is hiring during economic downtime.
            </p>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              If you look at the statistics, you will find some alarming numbers, such as:
            </p>

            <ul className="list-disc pl-6 mb-6  font-light text-gray-700 space-y-2">
              <li>
                The rate at which employees are voluntarily quitting their jobs is 25% higher than the pre-pandemic
                levels, said the U.S. Bureau of Labor Statistics.
              </li>
              <li>Around 50.5 million quit their jobs last year (2022), as per federal data.</li>
              <li>64% of employers now expect voluntary turnover to increase or remain elevated (McKinsey).</li>
            </ul>

            <p className=" font-light text-gray-700 leading-relaxed mb-8">
              If your hiring team has also felt the repercussions of the Great Resignation, they must work toward
              creating a balance between employee turnover and employee hiring. This is where the time-to-hire metric
              comes up as one of the key performance indicators for your hiring team.
            </p>

            <p className=" font-light text-gray-700 leading-relaxed mb-8">
              If you struggle to measure and improve the time to hire a candidate, it's time to relook at the
              fundamentals once again.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hiring Fundamentals: What is Time to Hire?</h2>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Time to hire refers to the time gap that exists between the first interaction with a potential candidate
              and the last one when he accepts the job offer. Considered a key recruitment metric, time to hire also
              shows the speed and efficiency at which your hiring team works. In simple words, the lesser time to hire,
              the better the recruitment process.
            </p>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              This period or gap includes various phases, such as screening in recruitment, initial interview rounds,
              skill tests, and more. Alongside this, this metric is tightly linked to hiring costs. It is because the
              longer the hiring process, the more resources you will need to hire candidates for a specific role.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Should You Track Time to Hire?</h2>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              The reason is quite clear and obvious – If your hiring process takes too long to fill a vacant role in
              your organization, it does not only increase the cost per hire. Along with it, comes the higher risk of
              losing high-quality, fast-moving candidates who might find a better opportunity in the meantime.
            </p>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              In terms of numbers, around 57% of job seekers lose interest in the job if the hiring process they undergo
              is equity lengthy (Source: Robert Half). It does not stop there as only 23% of the candidates will wait
              for just one week before they start looking for other opportunities.
            </p>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              A recent survey also found some interesting numbers on how long it actually takes to hire a suitable
              candidate:
            </p>

            <ul className="list-disc pl-6 mb-8  font-light text-gray-700 space-y-2">
              <li>
                49% of organizations reported that the usual time to hire is around 7-14 days from the day an
                application was received to sending the offer letter.
              </li>
              <li>24% of companies said that it takes them around 15-30 days to hire a candidate.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Average Time to Hire By Industry</h2>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              The following table covers the average time to hire in different industries in the U.S.:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Industry</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                      Average time to hire (in working days)
                    </th>
                  </tr>
                </thead>
                <tbody className="font-light">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Resources</td>
                    <td className="border border-gray-300 px-4 py-2">17.9</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Construction</td>
                    <td className="border border-gray-300 px-4 py-2">12.7</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Wholesale and retail</td>
                    <td className="border border-gray-300 px-4 py-2">24.6</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Leisure and hospitality</td>
                    <td className="border border-gray-300 px-4 py-2">20.7</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Warehouse and transport</td>
                    <td className="border border-gray-300 px-4 py-2">24.9</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Professional services</td>
                    <td className="border border-gray-300 px-4 py-2">25.2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Education</td>
                    <td className="border border-gray-300 px-4 py-2">29.3</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Non-farm</td>
                    <td className="border border-gray-300 px-4 py-2">28.3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Manufacturing</td>
                    <td className="border border-gray-300 px-4 py-2">30.7</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Information</td>
                    <td className="border border-gray-300 px-4 py-2">33</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Government</td>
                    <td className="border border-gray-300 px-4 py-2">40.9</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Health services</td>
                    <td className="border border-gray-300 px-4 py-2">49</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Financial services</td>
                    <td className="border border-gray-300 px-4 py-2">44.7</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className=" font-light text-gray-700 leading-relaxed mb-8">
              You can use your industry's average time to hire as a reference or benchmark your hiring for different
              open positions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Common Challenges Related to Reducing the Time to Hire
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Unclear job description</h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              In many cases, the hiring managers are not involved in writing a clear job description. Issues with
              default job posting processes or automated job boards introduce errors into a posting that are often
              ignored. The resulting unclear job postings tend to repel many potential candidates from the job
              positions, hence increasing the overall time to hire. This is something that exists well before screening
              in the recruitment cycle.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Not having the right people on the interview panel
            </h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Candidate interviews are a crucial part of the overall hiring process. With depleted candidate pipelines
              and stiff competition to hire the best talent, setting the right interview panel becomes quite difficult
              sometimes. This is where many hiring teams arrange calls or in-person interviews of candidates with the
              wrong interviewer(s).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Inability to find the right cultural fit</h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              A majority of recruiters believe cultural fit to be an important factor in the screening process for
              hiring the right candidates. Yet many of them still struggle to conduct an effective cultural fit
              assessment. Being unable to collect the right data makes an organization fail in finding the right
              cultural fit which thereby increases the staff turnover rate.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Inability to find the best talent that also the right attitude
            </h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-8">
              Just because a candidate has the required skill and knowledge for a job role does not mean he/she will
              approach it with the right attitude or enthusiasm. Having the right attitude toward work is not a
              substitute for natural aptitude. Businesses need people with the right competencies – the ones that can
              build a team to work together with a positive attitude.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5 Effective Ways to Reduce Time to Hire</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Build a Talent Pipeline Based On What You Are Looking for
            </h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-4">
              Just imagine having a full-fledged candidate slate ready to be used at your fingertips. This is possible
              with candidate pipelining which not only reduces the time to hire but also leads to better hiring
              decisions. You can build a talent pipeline by:
            </p>
            <ul className="list-disc pl-6 mb-6  font-light text-gray-700 space-y-2">
              <li>Pre-screen candidates for top performance and check whether they are also a good cultural fit</li>
              <li>Stay organized and keep a track of candidates contacted and their interest levels</li>
              <li>
                Embracing a networking culture where your team gets to attend industry events and set up a referral
                system for employee referrals
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Optimize Your Job Listing</h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-4">
              Online job postings – whether on a job board or your company's careers page can attract active job seekers
              provided it is well-crafted and includes all the necessary information. If your job listings aren't
              getting much traction, you should:
            </p>
            <ul className="list-disc pl-6 mb-6  font-light text-gray-700 space-y-2">
              <li>Add simple yet catchy job titles</li>
              <li>Create inclusive, career-growth-oriented job headlines</li>
              <li>Define your organization's culture</li>
              <li>Consider posting on niche job boards</li>
              <li>Benefit from internal talent scouts</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Make the Interview Process Short and Concise
            </h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-4">
              Any delay in scheduling interviews after the screening process for hiring is over will ultimately add more
              hours or days to the time to hire. As an improvement approach, you can:
            </p>
            <ul className="list-disc pl-6 mb-6  font-light text-gray-700 space-y-2">
              <li>Reduce the number of rounds in the overall interview process</li>
              <li>Be specific about the types of questions to be asked in each round</li>
              <li>Set different interview rounds on the same day or subsequent days at max</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Shorten the Requisition Approval Process for Effective Screening
            </h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Taking the hiring process from one stage to another often involves internal requisition approvals. Even
              before that, several approvals are required before passing the job specifications to the hiring team. If
              this also happens in your organization, simplify things and reduce the number of approvals needed for an
              effective screening process.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Hire Staffing Agency</h3>
            <p className=" font-light text-gray-700 leading-relaxed mb-8">
              When it is taking too long to hire a candidate, there is no harm in outsourcing the hiring needs to a
              reliable staffing agency. Their services can help prevent work overload, reduce the overall costs of
              hiring, and save time and resources. Particularly for hiring the right candidates for tech positions, you
              can tap into the existing database of qualified candidates that most staffing agencies have.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Can Connect Tech+Talent Help?</h2>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Connect Tech+Talent is regarded as a technical staffing agency helping companies get the resources they
              need. With 27+ years of experience in the hiring industry, Connect Tech+Talent knows what works in
              different industries – HealthTech, Cloud, MarTech, Fintech, etc., and how to support the internal hiring
              processes.
            </p>

            <p className=" font-light text-gray-700 leading-relaxed mb-6">
              Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
              takes the overbearing burden of finding human resources with the right skill set and lets companies focus
              on their core business. We specialise in IT jobs, helping businesses build and ramp up their technical
              staffing. We help build entire teams with the right set of skills in the technology that best suits their
              business.
            </p>

            <p className=" font-light text-gray-700 leading-relaxed mb-8">
              We at Connect Tech+Talent will also help you as a candidate to acquire most sought after technical skills
              and forward your candidature to leading enterprises with global reach.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className=" font-semibold text-gray-900 mb-3">Ready to Optimize Your Hiring Process?</h3>
              <p className=" font-light text-gray-700 mb-4">
                Let Connect Tech+Talent help you reduce your time to hire and find the perfect candidates for your tech
                positions.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Book a Meeting with Hiring Consultant</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

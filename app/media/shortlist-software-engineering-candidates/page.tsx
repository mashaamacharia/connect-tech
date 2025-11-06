"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function ShortlistSoftwareEngineeringCandidatesPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"
  const backToMediaUrl = `/media${page !== "1" ? `?page=${page}` : ""}`

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Media Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button variant="outline" asChild className="mb-6 bg-transparent">
          <Link href={backToMediaUrl} className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Media</span>
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
            7 Tips to Shortlist Software Engineering Candidates & Reduce Hiring Time
          </h1>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Kannan Kaliyur</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>March 31, 2025</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/media/shortlist-candidates.jpg"
              alt="Software developers collaborating in modern office environment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Employees are indeed the most valuable asset your organization can have. The skills and expertise they
              bring to the table to maintain and even improve business operations have a lasting impact on business
              growth. From manufacturing products to marketing them to the right audience, every employee plays a
              crucial role. However, shortlisting candidates for different roles and domains is not as easy as it may
              sound, particularly for the software development side of the business.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              The global software development market is expected to grow at a CAGR of 11.7% till 2030, says research.
              Amidst the Great Resignation and shortage of talent, hiring employees for software development roles has
              become a multi-faceted skill. It lies at the crossroads of technical acumen, networking, and process
              management. If your business involves software development for clients or internal purposes, you would
              agree that the hallmark qualities of software engineering candidates are quite difficult to evaluate.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              Yet all too often, many organizations face the common pitfall of focusing too heavily on technical minutia
              only. What about the candidate's ability to think creatively, solve problems, and be compatible with the
              rest of the team?
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              If you are looking for a way out to find qualified candidates for software development, we have compiled a
              list of effective hiring tips.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Set up a streamlined process to shortlist candidates
            </h2>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Shortlisting candidates in the tech field basically refers to the process of identifying candidates that
              meet the job requirements. It helps narrow down the pool of applicants you might have or would like to
              outreach and sets the standards for the talent acquisition team to follow. Ultimately, this shortlist will
              have the candidates that you want to move forward within the hiring process to the next recruitment funnel
              stage.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Wondering why you need to shortlist software development candidates? Well, it helps in identifying how
              on-target your team is with reaching the ideal candidates in the available applicant pool. If you struggle
              more with finding the right applicants that meet the criteria, it might be because your shortlist criteria
              are quite specific or you are not posting the jobs in the right places to simplify the hiring process.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              For example, if you want to hire an app developer, it makes sense to start the hiring process by creating
              a well-defined job description rather than simply posting the requirement on social media upfront.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Have minimum criteria to shortlist profiles
            </h2>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              One of the major challenges of hiring individuals for software development roles is the huge pool of
              applicants you receive for the open job role. Most applicants apply for a job if they find even a single
              requirement parameter matching their skills and expertise. Ultimately, this will increase the workload on
              your HR team to skim through the unsuitable applications.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              This is where being specific to the shortlist criteria plays a vital role. By its very nature, it will
              keep you away from unqualified applicants and shorten the duration of the interview process. Let's
              consider an example here –
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              You want to hire a WordPress developer having hands-on experience in creating simple-to-complex
              WooCommerce websites. You lay the minimum requirement to be 5 years of experience in this field, a
              well-built portfolio, along with the preference for candidates working in the same niche as yours and
              having a Master's degree.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              As you can see here, these minimum criteria will only attract candidates having the required technical
              skills. To this job specification, a WordPress developer having two years of experience will not apply,
              knowing that the chances of the application being rejected are quite high.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Define additional skills that will help in candidate assessment
            </h2>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Other than the basic education and experience criteria, you can narrow down the list of applicants by
              specifying additional skills and certifications. It is up to you to keep these skills as a must for
              application consideration or just to show who will be preferred for the role.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              A simple example of additional essentials for the tech hiring process is whether the candidate is AWS or
              Springboard certified. You can also consider this as a knock-out criterion because either the candidates
              will have it or they don't and get screened out in the first place.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              You can also add such certifications and skills in the desirable criteria to showcase who will be a strong
              candidate for the role. Like many other employers or hiring managers, you might find the line separating
              additional criteria and the essential ones to be blurred. However, the more you focus on dealing with the
              best tech talent, the more you can skim the less suitable candidates to define an efficient screening
              process.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Assign exact numbers of candidates to the shortlist for a job
            </h2>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              In literal terms, the importance of having a shortlist criteria is that it helps you obtain a short list
              of candidates. If you are not cutting down the number of candidates, shortlisting candidates won't really
              help. This is where setting a list maximum can help.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              In simple words, you need to fix the number of suitable candidates you will move forward with for the
              interview process. Once you have received that many applications, you can proceed with the next stages of
              hiring. Clearly, there will be no end to the applications you would receive if you do not put an upper
              limit here.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              It is also important not to worry too much about this upper limit. In case you get more highly qualified
              candidates that seem to be a good fit, interview them. If you have fewer of them, don't wait until you
              have the minimum number of applications for software development roles by your side.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Assign scores to job applicant resume for easy sorting
            </h2>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Think of it as analogous to student admissions into colleges. Having a certain cut-off prevents different
              colleges from dealing with candidates who are just not the right fit. Although you cannot have a tech
              applicant pool that will meet all your specifications and criteria, scoring candidates on a scale will
              help identify the strongest ones.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-4">
              A good strategy here is to follow the standard MEP (Mandatory, Essential, Preferred) System to score the
              candidates. It involves the following steps:
            </p>

            <ul className="list-disc pl-6 mb-6  text-gray-700 font-light leading-relaxed">
              <li className="mb-2">
                Start with ranking your list of minimum basic criteria as mandatory (M), an important skill to be
                essential (E), and an additional skill to be preferred (P) but not necessary
              </li>
              <li className="mb-2">
                As you follow the screening process, proceed with adding one point for every M a candidate possess, two
                points for every E, and three points for every P
              </li>
              <li className="mb-2">
                In the end, sum up all the points that a candidate possesses as per the information given in his
                application
              </li>
            </ul>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              Such scoring will also help in identifying the strengths and weaknesses of candidates that you can use to
              frame screening questions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Setup quantitative aptitude tests through online talent assessment tools
            </h2>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Hiring software development professionals is more challenging than hiring for other domains, shortlisting
              candidates being the most time-consuming part of your job. More than 75% of resumes received for an open
              job role are unqualified. Then it takes around 23 hours to screen the resumes for one hire. Considering
              the time and effort involved, it makes sense to automate the quantitative aptitude part of the process via
              online talent assessment tools.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Such tools have been designed to get the basic aptitude tests done at the start and then match the open
              role through a shortlisting algorithm based on candidate data points. The qualified candidates are then
              zeroed in through manual talent scouts. Once you switch to these tools, you will benefit from a dramatic
              reduction in time to fill a role.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              Similarly, you can use the Application Tracking System (ATS) to automate the resume screening process via
              knock-out questions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Setup a pre-screening over the phone call for personality assessment
            </h2>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Once you have the quantitative aptitude tests done to screen candidates, the process does not end here.
              For software developer jobs, you need more information about the candidates in terms of experience,
              previous projects handled, and even soft skills. This is where a pre-screening round of interviews can be
              used to take the candidature forward.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              You can use either phone call screening or live video screening rounds after shortlisting candidates.
              Similarly, you can self-recorded video interviews to prompt the candidates to respond to different
              questions if you need to handle a large volume of applicants. This is a great way to get to know your
              applicants beyond their resumes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Simplify Tech Hiring with Connect Tech+Talent</h2>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Hiring for tech roles such as software development and others is indeed time-consuming. If you feel the
              need for external help, join hands with Connect Tech+Talent – a leading staffing agency based in Austin.
              IT, Networking, Developers, Data Specialists, Connect Tech+Talent can help you hire more and faster. To
              get in touch, click here.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How can Connect Tech+Talent Help?</h3>
            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
              takes the overbearing burden of finding human resources with the right skill set and lets companies focus
              on their core business. We specialise in IT jobs, helping businesses build and ramp up their technical
              staffing. We help build entire teams with the right set of skills in the technology that best suits their
              business.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              We at Connect Tech+Talent will also help you as a candidate to acquire most sought after technical skills
              and forward your candidature to leading enterprises with global reach.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className=" font-semibold text-gray-900 mb-4">
                Ready to streamline your tech hiring process?
              </h4>
              <p className=" text-gray-700 font-light mb-4">
                Book a meeting with our hiring consultants to discover how Connect Tech+Talent can help you find and
                shortlist the best software engineering candidates for your team.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Book a Meeting with Hiring Consultant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

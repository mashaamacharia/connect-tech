"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function ResumeModificationPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"
  const backToMediaUrl = `/media${page !== "1" ? `?page=${page}` : ""}`

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Media Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button variant="outline" asChild className="mb-6 bg-transparent">
          <Link href={backToMediaUrl}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Media
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
            How to Modify Your Resume for Remote IT Job Opportunities?
          </h1>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Kannan Kaliyur</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>April 11, 2025</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/media/resume-modification.png"
              alt="Professional workspace showing resume creation on laptop"
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
              Indeed, a well-written resume is a crucial part of getting selected for a web or software developer job.
              It requires you to highlight your technical skills, coding languages known, remote work experience, and
              major accomplishments. However, if you have made up your mind to look for remote IT job positions, your
              resume should reflect that intent.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Like many others, you might want to jump into the market for remote job opportunities that have
              skyrocketed. More and more organizations now recruit employees to work remotely, which comes with several
              perks on the employee side. These include more flexibility at work, no need to commute, and better
              productivity. As of now, 16% of companies around the globe have shifted to a fully-remote work model, and
              44% are open to a hybrid way of working.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Hiring experts believe that you must tailor your resume for remote jobs according to the remote job you
              want to chase. But what does that mean and how to do it right?
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              Many organizations accepting remote job applications for developer roles see people mass applying but not
              for the right reasons. These candidates simply send their resumes without considering if they are actually
              the right fit.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              Clearly, if you want to stand out from your peers applying for remote developer job opportunities, your
              resume should make the required first impression. While there are several ways you can do it, let's first
              dive deeper into the 'Why' behind this requirement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Why Do You Need to Tailor Your Existing Resume to Hunt Remote Jobs?
            </h2>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              For a web developer like you, a resume is not just a document but a wall outlining your overall experience
              and web/software development skills. Most web developers work in teams for efficient collaboration and
              follow strict agile procedures to ensure the timely delivery of projects. While most freelance web
              developers offer their services to several clients at a time, others work full-time for a single software
              company.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Tailoring your remote work resume to fit different remote work opportunities ensures that it's ready for
              use at a moment's notice. Also, if you constantly keep a check on updating new skills, projects, and
              promotions in your resume, it then takes very little time to edit it for a limited-time opportunity. This
              will help grab the work role before your peers could finish scrambling to fix their resumes.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Amidst the competition in the development space, the job openings for quality assurance analysts, software
              developers, and testers are expected to grow by 22% Y-o-Y from 2020 to 2030. Still, there is a global
              shortage of software engineers, with 64% of IT executives confirming that tech talent shortages hinder
              technology adoption.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              To grow your career and find the best place to work, it's time for you to modify your current resume
              before you start applying for remote jobs.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-8">
              5-Step Process to Modify Your Resume for Remote Tech/Developer Jobs
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              1. Customize your work experience to highlight remote working capability
            </h3>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              You have a passion for developing websites, apps, and software, and want to take the next big leap in your
              career. You have the required work experience to make the transition. But does it all matter to the
              potential employer who is seeking someone like you to join their company? Maybe not, because it's too
              you-centric.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              It actually implies that companies, while hiring developers for different projects, have a clear idea of
              what they want. Particularly when they are offering remote work opportunities to developers, they want to
              know what you can do for them differently than other applicants and what makes you better. One key area
              that can work in your favor is prior remote work experience. You can highlight this in your resume to
              showcase your understanding of the challenges of working remotely.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              A prior experience of anything at work is most favored as it demonstrates your ability to get in sync with
              the work more easily, hence increasing your chances of getting hired.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              2. Showcase your soft skills that matter more when working remotely
            </h3>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Your ability to interact amicably with the team members and other organizational staff is more commonly
              regarded as a soft skill. These are personal attributes that affect the overall communication experience
              at the workplace. Since developers are highly qualified, expensive resources for an organization, the
              right hiring of candidates for such roles is quite crucial for any organization. In case an organization
              is looking for a candidate that can deal with their clients and gain work, it is essential for them to
              hire someone who has the right set of digital communication skills, etiquette awareness, and networking
              abilities.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Even if you are good in all these areas of communication and can fit well into the behavioral scene of a
              new organization, no one knows that unless you tell them so. Hence, a crucial step toward resume
              modification is to recognize your soft skills. If you feel you need to improve in certain areas, you can
              choose to invest time and effort there to further strengthen your resume.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              3. Highlight your familiarity with common remote collaboration tools
            </h3>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              If there is one thing that the pandemic has taught most of us about continuing to work, it is the use of
              remote tools. At your new company where you seek a remote job opportunity, you will constantly need to
              interact with your colleagues and clients via video calls, share presentations of new ideas, or give
              access to updates related to the current development projects. These days, people use different
              collaboration tools as a part of work even in an on-site work environment.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Think of a situation where a candidate being interviewed for a remote developer role is asked about
              familiarity with Basecamp, Trello, or Slack. In case the candidate has no idea of what these tools do
              while they are a crucial part of the development process at the company, the chances are that he won't be
              preferred for the job over the applicants who have worked on all these tools.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">4. Emphasize your team-building skills</h3>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Every tech company wants to build a team that works together cohesively toward common goals for product
              development and similar others. At its core, the most powerful reason why employers look at a candidate's
              team-building skills is to get the results they expect on time. Unless an employee maintains good
              coordination with the team, he is less likely to get the work done on time. When a newly-hired employee
              leaves the job during the probation period itself, it takes significant time for the position to be
              refilled with the best tech talent.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Think from the employer's perspective for once. It would be good for them not to hire somebody who is not
              a good fit and will possibly leave sooner than to wait and find the perfect fit for a job role. With
              remote work expectations, the scrutiny at the level of team-building is even more critical. Highlighting
              your remote work skills and experience can give your resume a competitive edge.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              5. Specify uninterrupted connectivity to the Internet and electricity at your remote workplace
            </h3>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Although it may sound less technical or work-related, it is quite important for employers looking for the
              best talent for software developer positions. If the reason you are applying for a tech role is mainly
              remote work flexibility, it is obvious for the employer to ensure that the place where you live and choose
              to work has easy access to the Internet and electrical power.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              It does not make sense for a company to hire a developer who chooses to live in his village or countryside
              lacking in continuous power supply and uninterrupted Internet connectivity. Ultimately, it is the work
              that is going to be affected by the unavailability of that employee for crucial meetings, tasks, and team
              sessions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-8">
              Other Quick Tips to Tidy and Freshen Up Your Resume for Remote Jobs
            </h2>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              When the weather changes, you might have noticed your neighbors and yourself sprucing up the front yards,
              cleaning foyers, and repainting their places. The reasons – it makes the first impression on both the
              guests and onlookers.
            </p>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Your resume is no different as it offers a brief glimpse of your work life. To make them feel attracted
              and want to know you more, here're the basics of resume upgrade you must keep in mind:
            </p>

            <h3 className=" font-semibold text-gray-900 mb-3 mt-6">Proofread the resume content</h3>
            <p className=" text-gray-700 font-light leading-relaxed mb-4">
              Multiple typos and grammatical errors in your resume can easily make yours reach the 'No' pile that hiring
              managers create as a part of their day-to-day work while screening candidates. Hence, make sure there are
              no or least errors.
            </p>

            <h3 className=" font-semibold text-gray-900 mb-3 mt-6">Remove unimportant jobs and spaces</h3>
            <p className=" text-gray-700 font-light leading-relaxed mb-4">
              No HR team would love to skim through multiple pages of resume content that has less relevant job
              experiences and unnecessary spacing just to make it long. When you update your resume for remote jobs,
              make sure you remove spacing issues and less important work experiences.
            </p>

            <h3 className=" font-semibold text-gray-900 mb-3 mt-6">
              Be concise and to the point about your experience
            </h3>
            <p className=" text-gray-700 font-light leading-relaxed mb-8">
              Detailing your previous work experience in your resume is quite subjective and may sound like answering
              interview questions upfront. In fact, explaining what you have done as a developer is a part of the
              in-person interview when someone asks you about it. So, let the resume be in such a shape that it creates
              a good impression to take things forward.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6 mt-8">
              Reach the Best Tech Roles Early with Connect Tech+Talent
            </h2>

            <p className=" text-gray-700 font-light leading-relaxed mb-6">
              Just like finding better tech jobs than your current one is difficult, so is the process of hiring the
              best tech talent. Let Connect Tech+Talent be the guiding light to your next career move. Being a leading
              tech talent agency in Austin, Connect Tech+Talent helps companies hire the best fit for tech roles.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">How can Connect Tech+Talent Help?</h3>

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

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className=" font-semibold text-gray-900 mb-4">
                Ready to optimize your resume for remote IT opportunities?
              </h3>
              <p className=" text-gray-700 font-light mb-4">
                Book a meeting with our hiring consultant to get personalized guidance on your career journey.
              </p>
              <Button asChild>
                <Link href="/contact">Book a Meeting with Hiring Consultant</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

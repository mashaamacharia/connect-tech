"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function VideoInterviewsPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"
  const backToMediaUrl = `/media${page !== "1" ? `?page=${page}` : ""}`

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Media Button */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild className="mb-4 bg-white hover:bg-gray-50">
            <Link href={backToMediaUrl} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Media</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
              5 Reasons Why Businesses Need to Embrace Video Interviews
            </h1>

            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Kannan Kaliyur</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>January 21, 2025</span>
              </div>
            </div>

            <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-12">
              <Image
                src="/media/video-interviews.png"
                alt="Video Interviews in Business"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-700 leading-relaxed break-words">
              <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-6">
                Introduction – How the pandemic ushered in the big shift to video screens in our everyday work and life
              </h2>

              <p className="mb-8  font-light">
                Distancing measures, lockdown in schools, businesses, and overall social life, which were unremarkable
                in the fight against the spread of disease, also disrupted many aspects of life, including sports and
                other physical activities. The world witnessed a transformation in common behaviors, economy, medicine,
                and beyond due to the COVID-19 Pandemic. On the brighter side, social distancing, and lockdown eased
                diagnosis rates of other common infectious diseases, such as seasonal influenza, due to the practice of
                reduced social contact; and it taught us all a new way of life.
              </p>

              <p className="mb-8  font-light">
                Employers recognize that people can be entrusted to work from the comfort of their homes, and in some
                cases, they are even more productive than working from the office. At the same time, employees have
                admitted there is no replacement for face-to-face interaction through massive technological development
                exists. In a global survey by the National Library of Medicine, more than half of people, i.e., 52.5%,
                answered that COVID-19 did not influence their occupational status, 30.2% had a significant squeeze in
                working hours/shifts that they usually work, and 8.5% almost lost their jobs because of this Covid
                breakdown.
              </p>

              <p className="mb-8  font-light">
                Now, in the post-pandemic world, communication is substantially improved, and companies can
                communicate/convey necessary information in minutes more easily with foreign countries. Market research
                or other market study is also far streamlined. For companies, progress in executing strategic technology
                sensations such as video calls whenever necessary saves them lots of time and money. Money/Information
                exchanges are unexpectedly faster, especially with the 4G/5G speed internet.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Data: The rise of remote work, virtual meetings, and collaboration tools
              </h2>

              <p className="mb-8  font-light">
                Many companies had to return to remote work quickly and more effectively. They therefore chose familiar
                video conferencing and collaboration tools that are often free of cost. The approach will differ
                according to the remote work goals. Businesses may be remote, offer virtual job positions, or create a
                hybrid solution.
              </p>

              <p className="mb-6  font-light">
                For a booming collaboration scenario to prevail, companies must handle the following crises:
              </p>

              <ul className="mb-8 space-y-3 list-disc list-inside  font-light">
                <li>Building and strengthening confidence between workers, supervisors, and leaders.</li>
                <li>Monitoring tasks and projects and assuring timely follow-up procedures.</li>
                <li>
                  Developing and maintaining the company's existing culture while staff works in diverse time zones.
                </li>
                <li>Lowering technology issues and equipping a proper inclusive environment.</li>
                <li>
                  Embracing workflows to improve collaboration and avoid disputes/disagreements between departments.
                </li>
              </ul>

              <p className="mb-8  font-light">
                Therefore, leaders must prioritize workplace innovation by discovering practices to replicate reflexive
                idea-sharing and cross-team collaboration in office environments. To this end, a technology approach is
                critical.
              </p>

              <p className="mb-8  font-light">
                Equipping home offices and on-premise workspaces with video technology is key to enhancing
                collaboration. Incorporating video tools with cloud software and storage lets teams collaborate in
                real-time and quickly transfer files. However, to provide collaboration, employers must address
                work-from-home cases while reconditioning offices for the future of work.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Impact of these trends on hiring</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                1. People have gotten used to video screens
              </h3>
              <p className="mb-8  font-light">
                Video interviews can be more nerve-racking and revealing than the usual telephonic interviews. In
                addition to seeing your body language, recruiters can judge your professional appearance and general
                approach from a video call. But people have gotten accustomed to these video screen hiring like the
                normal approach.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                2. Today's employees do not want to return to work
              </h3>
              <p className="mb-8  font-light">
                People have adapted to remote work; truthfully, companies have made massive changes and accommodations
                for employees to adapt to the Pandemic. However, top executives want to re-open and return to the
                office, but some employees feel like they need to be in their comfort zone working from home.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">3. Saving time and pollution</h3>
              <p className="mb-8  font-light">
                Today's generation wants to avoid commuting or adding more time to their workday. These people see
                commute time as a waste of valuable personal time that they, in many ways, play more importance on than
                the actual work time itself. This saves their time and avoids contributing to excess pollution issues.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                4. You cannot spend unnecessary time and money on wasted hiring efforts
              </h3>
              <p className="mb-8  font-light">
                The cost of hiring an employee continues beyond just paying for their salary to take them inside your
                company. It also involves the cost of recruiting, training, benefits, and more procedures. But after the
                Pandemic, online interviews and training have reduced recruiting expenses and other hiring efforts.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                5. Technology has made it easy, efficient, and effective to hire through video meetings
              </h3>
              <p className="mb-8  font-light">
                Video meetings have become an influential and the most cost-effective Human Resources tool used for
                pre-screening prospects, interviewing candidates, and onboarding new employees. In the current global
                video conferencing demand in the market, the following companies occupy a little more than half of the
                entire market after the Pandemic:
              </p>

              <ul className="mb-8 space-y-3 list-disc list-inside  font-light">
                <li>Zoom Video Communication Inc.</li>
                <li>Cisco Systems Inc.</li>
                <li>Microsoft Corporation</li>
                <li>Google Inc.</li>
                <li>Adobe Systems Inc.</li>
                <li>ZTE Corporation</li>
                <li>Huawei Technologies Co</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                6. Video interviews (Synchronous and Asynchronous) can help with precise candidates
              </h3>
              <p className="mb-8  font-light">
                Synchronous online interviews correspond most closely to the usual traditional interview that is
                conducted in real-time. However, synchronous video interviewing is becoming increasingly popular among
                companies seeking to save time and money during their recruiting process by making the hiring process
                more collaborative. More team members can review candidates, provide comments, and provide assessments
                instead of just one hiring manager. Using asynchronous video interviews, you can standardize the
                recruitment process, ask all candidates the same questions in the same way, and store them for over a
                year for record-keeping.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                7. The screening process, especially for tech roles
              </h3>
              <p className="mb-8  font-light">
                It is possible to assess a candidate's professional skills and abilities with multiple online testing
                solutions and concisely evaluate their skill set and abilities. By using online technical assessments,
                they can shortlist candidates for a particular job based on their coding skills, which is far more
                accurate. This online screening method helps automate shortlisting and simplifies tech recruitment,
                eliminating bias from recruiting.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Five effective reasons businesses need to embrace video interviews
              </h2>

              <p className="mb-8  font-light">
                Video conferencing is therefore accepted worldwide as it boosts productivity, saves time, reduces travel
                expenses, and promotes collaboration. The advantage of video conferencing is encouraging all of those
                benefits without demanding constant travel for face-to-face communication.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                More engaging and interactive than audio conferencing
              </h3>
              <p className="mb-8  font-light">
                Once the video seems engaging during a call, the real sense and etiquette of the meeting change. This
                also involves bringing closer relationships between team members or clients who have not met in person
                during the pandemic.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                Attending the meeting online is as good as in-person
              </h3>
              <p className="mb-8  font-light">
                Reaching the office late due to traffic or other personal reasons might delay the meetings, leading to
                cancellations. Video conferencing enables even key high-level team members to participate in discussions
                and be on time.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                It enables superior communication and learning
              </h3>
              <p className="mb-8  font-light">
                Humans tend to observe and process visual information far faster and more capably than just simple text
                or audio. Auditory recognition memory rendition is markedly inferior to visual recognition memory.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
                Keeps dispersed teams connected and aligned
              </h3>
              <p className="mb-8  font-light">
                Cloud-delivered video conferencing option is the closest thing to working together in person. Video
                conferencing eliminates the distance or disconnect between internal team members working at client sites
                most of the time.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-5">Video Conferencing Gets Things Done</h3>
              <p className="mb-8  font-light">
                It's easy to arrange a video call and get face-to-face, ensuring customers get their questions and
                issues discussed and addressed. Video calls can be personalized and get things done quickly, where
                people get to know each other. It drives better communication creates trust, and builds stronger
                relationships like in physical meetings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>

              <p className="mb-8  font-light">
                Overall, video interviews offer numerous benefits to businesses that are looking to streamline their
                recruitment process, improve candidate experience, and connect with a wider pool of talent. By embracing
                this technology, businesses can gain a competitive advantage in the race for top talent.
              </p>

              <p className="mb-10  font-light">
                People must connect online or offline to collaborate and communicate effectively. The key to successful
                hybrid or remote working arrangements is to design policies that promote worker engagement,
                productivity, and retention.
              </p>

              <div className="bg-blue-50 p-8 rounded-lg my-12 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">How can Connect Tech+Talent Help?</h3>
                <p className="text-blue-800 mb-4 leading-relaxed font-light">
                  Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
                  takes the overbearing burden of finding human resources with the right skill set and lets companies
                  focus on their core business. We specialise in IT jobs, helping businesses build and ramp up their
                  technical staffing. We help build entire teams with the right set of skills in the technology that
                  best suits their business.
                </p>
                <p className="text-blue-800 mb-6 leading-relaxed font-light">
                  We at Connect Tech+Talent will also help you as a candidate to acquire most sought after technical
                  skills and forward your candidature to leading enterprises with global reach.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Book a meeting with Hiring Consultant</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function GlobalizationHiringStrategiesPage() {
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
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/media/globalization-hiring.jpeg"
              alt="7 Strategies for Effective Hiring in the Age of Globalization"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
            7 Strategies for Effective Hiring in the Age of Globalization
          </h1>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Kannan Kaliyur</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 18, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-gray">
            <p className=" text-gray-700 leading-relaxed mb-6 font-light">
              The current state of globalization is like a swift and strong wave. It's touching a lot of frontiers and
              changing them into an entirely new state. The world we see now is a world with melted boundaries, higher
              collaboration and faster communication than ever before. Innovators, enterprises and people can jump from
              one region to another without leaving their physical anchors. They can interact, work and create a lot of
              ideas and impact –in a seamless way now.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Implications of Globalization for Hiring:
            </h2>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className=" font-medium text-gray-900 mb-2">Better talent availability</h3>
                <p className=" text-gray-700 font-light">
                  When people are able to reach any region without the need for a physical footprint, this leads to a
                  wider pool of candidates – and available easily.
                </p>
              </div>

              <div>
                <h3 className=" font-medium text-gray-900 mb-2">The world is now open and up for grabs</h3>
                <p className=" text-gray-700 font-light">
                  If you are looking for a specific talent need. If, earlier, you could not find that specific talent
                  around you, now you can easily tap it from any other part of the world.
                </p>
              </div>

              <div>
                <h3 className=" font-medium text-gray-900 mb-2">No geographical constraints</h3>
                <p className=" text-gray-700 font-light">
                  Globalization has shrunk the world on the virtual canvas. Now there is no need to be limited by
                  physical boundaries. A lot of countries and their skill-pools are now accessible and easy to reach out
                  to.
                </p>
              </div>

              <div>
                <h3 className=" font-medium text-gray-900 mb-2">Tapping the Hybrid workforce</h3>
                <p className=" text-gray-700 font-light">
                  Your organization can now enjoy the best of both worlds- it can hire near-shore talent as well as
                  recruit talent from far-off places. The ability to blend both kinds of talent has been made simplified
                  and affordable with the advent of new technology. You can have a team with some people working in your
                  own office and some sitting far away- but still collaborating without any friction.
                </p>
              </div>

              <div>
                <h3 className=" font-medium text-gray-900 mb-2">Cross-pollination of skills across regions</h3>
                <p className=" text-gray-700 font-light">
                  This access to a global pool also opens the doors of mixing a diverse set of capabilities and creating
                  a beautiful symbiotic effect. If one country is strong on a certain domain, it can now take advantage
                  of skills in other domains without any hiccups.
                </p>
              </div>

              <div>
                <h3 className=" font-medium text-gray-900 mb-2">
                  'Follow The Sun' model – An always-on workforce
                </h3>
                <p className=" text-gray-700 font-light">
                  Of course, globalization means 'your office never sleeps'. It's a 'no-lights-out' scenario since some
                  geography would always be up and running in this new work model.
                </p>
              </div>

              <div>
                <h3 className=" font-medium text-gray-900 mb-2">Productivity and Engagement</h3>
                <p className=" text-gray-700 font-light">
                  A splendid side-effect of a globalized workforce is that people enjoy working with a versatile set of
                  colleagues from all over the world. This new flavor of team-work creates high fulfilment and output
                  too.
                </p>
              </div>

              <div>
                <h3 className=" font-medium text-gray-900 mb-2">Distributed workforce</h3>
                <p className=" text-gray-700 font-light">
                  Talent managers and HR leaders can strategically allot different tasks to different regions as per
                  their competencies and time-zones. This really helps in leveraging the distributed workforce
                  advantage- and in de-risking a lot of HR areas.
                </p>
              </div>
            </div>

            <p className=" text-gray-700 mb-6 font-light">
              These changes have a massive connotation for tech hiring. As observed in the 8th edition of the Dice Tech
              Job Report-there were about three million tech job postings between January and June 2022. When juxtaposed
              with data from January through June 2021, the demand for tech talent has continued to grow throughout the
              first half of this year. In fact, companies not normally categorized as tech also continue to recruit and
              hire tech talent at a rapid pace. Tech job postings were up 45% since the beginning of the year and up 52%
              compared to the first half of 2021. This means that tech talent-hiring teams have to be extra cognizant of
              both the opportunities and the challenges that come with globalization.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Challenges of Globalization for Hiring:</h2>

            <p className=" text-gray-700 mb-6 font-light">
              It's not easy to recruit in a globalized world. In terms of top HR challenges, 39 per cent cited
              recruiting and hiring as a big challenge and 24 per cent identified remote or hybrid work as a challenge
              in a recent PwC's Human Resources Technology Survey. Candidates are not making this task any easier too.
              Consider how over a third of the respondents were seen extremely or very likely to switch to a new
              employer and how 37% millennials are likely to switch employers in the next 12 months. Even 33% of Gen Z
              workers are extremely or very likely to ask for a reduction in work hours (as seen in the India Workforce
              Hopes and Fears Survey 2022 report).
            </p>

            <p className=" text-gray-700 mb-6 font-light">
              If we comb through a McKinsey study, we can see that 95% CHROs were putting priority on elevating HR
              through digitalization. A McKinsey survey of 80 CHROs (at some of the largest organizations in the United
              States and Europe) found more than 90% predict significant changes to the HR operating model during the
              next two to three years.
            </p>

            <p className=" text-gray-700 mb-6 font-light">
              In the SHRM State of Workplace Study 2021-2022, we see that 84 % of organizations reported labor shortage
              challenges in the past year. Organizations have fallen short when it comes to the twin talent challenges
              of recruitment and retention. 72% of HR professionals shared that their HR department was working beyond
              capacity and stretched too thin. Finding and recruiting talent with the necessary skills (68% of
              organizations) emerged as 3rd-highest priority for 2022.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-4">
              Key challenges of globalization that accentuate these HR difficulties
            </h3>

            <ul className="list-disc pl-6 space-y-2 mb-8  text-gray-700 font-light">
              <li>
                <strong>Talent outreach</strong> – It's possible to reach other regions with globalization, but it means
                a new strategy and model for HR leaders
              </li>
              <li>
                <strong>Time expense</strong> – When HR teams use the wrong tools, they can incur more time in reaching
                out to a global workforce
              </li>
              <li>
                <strong>Cost expense</strong> – Communicating with global candidates and seamlessly handling the
                screening process – it can be quite costly too, especially on the hidden and unplanned costs.
              </li>
              <li>
                <strong>Uncertainty</strong> – It's hard to predict the timely, and role-based, availability of talent
                in a global model- specially for tech-talent
              </li>
              <li>
                <strong>Quick domino-effect of one region over another</strong> – What affects one region can quickly
                spread to other regions too. As seen in the recent phenomenon of 'The Great Resignation' and 'The Silent
                Quitting'
              </li>
              <li>
                <strong>Redundant resources</strong> – Sometimes recruiting across the globe can lead to a lot of people
                sitting on the bench – leading to underutilization of manpower
              </li>
              <li>
                <strong>Duplication of effort</strong> – Too many regions – without a smooth and smart technology
                platform- can create a lot of chaos and duplication in hiring
              </li>
              <li>
                <strong>Absence of the right talent criteria specially for tech roles</strong> – Confusion and delayed
                communication – can be compounded with fragmentation of HR – specially high in globalized hiring.
              </li>
            </ul>

            <p className=" text-gray-700 mb-6 font-light">
              All these challenges are being played out in real numbers. When asked about their greatest challenge to
              finding talent, 72 % cited lack of qualified talent in the SHRM State of Workplace Study. Also, HR
              professionals predict limited resources and resistance to change as greatest barriers for achieving
              priorities – and 14 % cite limiting or limited technologies as a barrier here. Turns out that HR teams are
              walking a tight rope – on one hand, they have to empower their organizations with right, and timely,
              talent. On the other hand, they face barriers in achieving this aim.
            </p>

            <p className=" text-gray-700 mb-6 font-light">
              So how can HR leaders and tech-talent hiring teams navigate this new landscape?
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7 Effective Strategies for Globalized Hiring:
            </h2>

            <p className=" text-gray-700 mb-6 font-light">
              It's simple. HR teams need to invest strategy, and effort, in solutions that help them in maximizing
              opportunities and reducing challenges of globalization.
            </p>

            <p className=" text-gray-700 mb-6 font-light">
              The PwC's Human Resources Technology Survey showed that HR tech is delivering the goods overall by meeting
              expectations and creating value for both HR and the business. In terms of top HR challenges, 39 per cent
              cited recruiting and hiring as a big challenge.
            </p>

            <p className=" text-gray-700 mb-4 font-light">
              This is where you need effective strategies to make the most of globalization:
            </p>

            <ol className="list-decimal pl-6 space-y-4 mb-8  text-gray-700 font-light">
              <li>
                <strong>Adopt technology with a prudent mindset.</strong> You need not just any tool but a platform that
                can really understand what you go through – your ambitions and constraints in tech-hiring.
              </li>
              <li>
                <strong>Look for expertise that has been battle-tested.</strong> You need a solution that can put on the
                table- over 26 years of experience in the field of hiring tech talent – in a way that you can use a big
                berth of flexible staffing solutions such as permanent, contract, temporary, remote & project-based
                hiring.
              </li>
              <li>
                <strong>Deploy a solution that cannot just write better job descriptions</strong> but also helps you in
                the candidate screening process and does so with a lens on both Technical and Cultural fit.
              </li>
              <li>
                <strong>Always incorporate solutions that can open windows to a larger pool of candidates.</strong>
              </li>
              <li>
                <strong>Do not sacrifice time for the temptation to hire the best.</strong> It should be a balance of
                both.
              </li>
              <li>
                <strong>Use tech-hiring as a competitive advantage in your industry.</strong> In a milieu, where people
                are facing disillusionment and looking for something 'beyond a salary' – it's wise to bridge the
                distance with smart hiring and etch your brand as a strong employer that understands these expectations.
              </li>
              <li>
                <strong>Opt for technology that understands your industry</strong> – specially for the exact tech roles
                and context you need while hiring candidates from a global pool.
              </li>
            </ol>

            <p className=" text-gray-700 mb-8 font-light">
              So as you look at this massive wave, take a step back and reflect on how you can meet the new era of
              globalization in a way that helps you to tap maximum advantages possible. Then step ahead and select the
              right partner. Dive into the new age. Talk to a hiring expert today.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How can Connect Tech+Talent Help?</h3>
              <p className=" text-gray-700 mb-4 font-light">
                Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
                takes the overbearing burden of finding human resources with the right skill set and lets companies
                focus on their core business. We specialise in IT jobs, helping businesses build and ramp up their
                technical staffing. We help build entire teams with the right set of skills in the technology that best
                suits their business.
              </p>
              <p className=" text-gray-700 mb-4 font-light">
                We at Connect Tech+Talent will also help you as a candidate to acquire most sought after technical
                skills and forward your candidature to leading enterprises with global reach.
              </p>
              <p className=" text-gray-700 mb-4 font-light">
                Connect Tech+Talent- with over 27 years of experience in tech hiring and having a rich global database
                of over 2.0m tech resources- can be a trusted partner in your growth journey.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Book a meeting with Hiring Consultant</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

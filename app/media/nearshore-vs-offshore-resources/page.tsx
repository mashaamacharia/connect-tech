"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function NearshorVsOffshoreResourcesPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get("page") || "1"
  const backToMediaUrl = `/media${page !== "1" ? `?page=${page}` : ""}`

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Media Button */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild className="mb-4 bg-transparent">
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
              Nearshore vs. Offshore Resources: Which Recruiting Model Works for Your Business?
            </h1>

            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Kannan Kaliyur</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>January 25, 2025</span>
              </div>
            </div>

            <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden mb-8">
              <Image
                src="/media/nearshore-vs-offshore.png"
                alt="Business presentation on outsourcing strategies"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto text-gray-700 leading-relaxed overflow-hidden break-words">
            <p className=" font-light mb-10 leading-relaxed">
              The nature of modern businesses is quite competitive and increasingly digital, which is why the need to
              scale skills and resources can be tricky to balance within budget constraints. Also, the availability of
              technologically-advanced solutions has made the world a small place as communications are faster than ever
              before.
            </p>

            <p className=" font-light mb-8">
              Unlike traditional hiring of resources to meet the growing demands, you can now benefit from flexible
              up-scaling while maintaining the core team in the business. This is where resource outsourcing comes into
              the picture.
            </p>

            <p className=" font-light mb-8">
              When it comes to ensuring that you have the right resources working for you, outsourcing talent has been
              quite a hot trend over the years. It can be because:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className=" font-light">
                More than 70% of organizations believe that outsourcing is advantageous in terms of cost-cutting
                (Deloitte).
              </li>
              <li className=" font-light">
                24% of small businesses outsource some of their operations for improved efficiency (Clutch).
              </li>
            </ul>

            <p className=" font-light mb-8">
              To say the least, outsourcing resources has caught up on the winds, as a result of which companies with
              fluctuating demands for human resources move past their in-house resources to look at the external
              collaborative models.
            </p>

            <p className=" font-light mb-8">
              Also, the trends have made many business owners confused about offshore and nearshore outsourcing. If you
              are looking at these hiring trends but are unsure about whether to go with offshore or nearshore
              outsourcing models, let's clear your doubts.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Offshore Outsourcing?</h2>

            <p className=" font-light mb-8">
              Offshore outsourcing, as the name suggests, refers to the process of outsourcing resources located in a
              foreign land. It involves hiring a team in a different country that has a different language/cultural
              values to work remotely for your organization. It is generally done through an outsourcing company located
              in a foreign country.
            </p>

            <p className=" font-light mb-8">
              The need for offshore resource outsourcing can be gauged from the fact that not every company can afford
              to keep a pool of professionals on standby when their expertise is not being fully utilized. Unlike
              onshore outsourcing, there is no bound on hiring resources from the same city or state where the company's
              office exists.
            </p>

            <p className=" font-light mb-8">
              Various companies in the U.S., Asia, and Europe are some of the most popular offshore outsourcing
              destinations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-5">Advantages of Offshore Outsourcing</h3>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className=" font-light">
                With offshore resource outsourcing, you get access to a global pool of talented individuals to fulfill
                your short-term or long-term human resource needs. This is particularly when your business is located in
                a region that is short of the best talent your business needs.
              </li>
              <li className=" font-light">
                Particularly in the software development field, it is one of the cost-effective ways to hire experts
                from across the globe to work for your organization.
              </li>
              <li className=" font-light">
                This resource outsourcing model can help you benefit from organizing a 24-hour work model. Since the
                in-house and outsourced resources operate in different time zones, you can achieve a continuous work
                model.
              </li>
              <li className=" font-light">
                If you are interested in investing in offshore resource outsourcing for IT management, a dedicated team
                of experts can undertake your IT requisites without causing the on-premise HR burden.
              </li>
            </ul>

            <p className=" font-light mb-8">However, you should also know that:</p>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className=" font-light">
                With offshore outsourcing, you might suffer from time-zone differences and the related impact on work
                productivity.
              </li>
              <li className=" font-light">You might face the impact of cultural differences.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Nearshore Outsourcing?</h2>

            <p className=" font-light mb-8">
              Nearshore outsourcing can be considered an intermediate process that is designed to fill the gaps between
              onshore and offshore outsourcing. When you choose to nearshore a part of their operations, you choose a
              partner residing in a neighboring country with a similar time zone.
            </p>

            <p className=" font-light mb-8">
              The primary purpose of choosing a nearshore partner is to partner with resources having similar cultures
              and languages. This way, neither culture nor time becomes a barrier to maintaining work productivity. It
              is considered a better alternative to onshore resource outsourcing as it offers more flexibility in
              relation to site visits and meeting the team in person as part of work requirements.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-5">Advantages of Nearshore Outsourcing</h3>

            <ol className="list-decimal pl-6 space-y-3 mb-8">
              <li className=" font-light">
                With nearshore resources, you get the benefit of a highly trained talent pool without facing significant
                time zone differences. If the selected outsourcing company resides and operates in a similar time zone,
                you do not need to worry about the delay in project completion.
              </li>
              <li className=" font-light">
                You can also avail optimum cost to hire resources externally in comparison to onshore outsourcing.
              </li>
              <li className=" font-light">
                The differences between work cultures in two nearby countries are easily manageable.
              </li>
              <li className=" font-light">
                Whenever you need to plan a visit to the outsourcing partner or discuss project-specific requirements,
                you can easily do so to maintain work relations.
              </li>
            </ol>

            <p className=" font-light mb-8">
              While looking at the benefits of nearshore outsourcing, you should also consider:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className=" font-light">
                The cost of nearshore outsourcing lies between the offshore and onshore hiring model
              </li>
              <li className=" font-light">
                Strict project deadlines that require you to keep up with the daily deliverables and manage the
                nearshore team efficiently
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Nearshore Vs. Offshore Outsourcing: Brief Comparison Table
            </h2>

            <div className="overflow-x-auto my-10">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Parameters</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Nearshore Outsourcing</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Offshore Outsourcing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cost</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Might be as expensive as onshore outsourcing
                    </td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Can lead to cost savings depending on the country selected for resource outsourcing
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Time savings</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Offers more time value on the back of low barriers to proximity
                    </td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Depending on the selected outsourcing company and their work hours preferences
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Convenience</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Enables clients and hired teams to come on common grounds for projects discussions or training
                    </td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Requires technology to offer a convenient way to work together irrespective of the time
                      differences
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Collaboration</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">Easy to maintain in person</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Maintained via online tools for project development
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Communication</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Unaffected with the help of conferencing apps though onshore outsourcing has an upper hand
                    </td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Unaffected with the help of conferencing apps though onshore outsourcing has an upper hand
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Effect of time zone differences</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">Medium</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">
                      Depends on the operational hours of the hired company
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Effect of cultural differences</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">Medium</td>
                    <td className="border border-gray-300 px-4 py-3 font-light">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Should You Consider While Selecting a Recruitment Model?
            </h2>

            <p className=" font-light mb-8">
              A majority of organizations across the globe are looking for ways to improve their usage of resource
              outsourcing to create a balance between cost and expertise. To select the right outsourcing model for your
              business, you must consider:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-5">1. Your business-specific requirements</h3>
            <p className=" font-light mb-8">
              Unless you know what exactly you are looking for, you might find it difficult to select the right
              outsourcing model. So, analyze your business needs and compare every outsourcing model in terms of its
              benefits to zero in on the best one.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-5">
              2. Experience level of the outsourcing company
            </h3>
            <p className=" font-light mb-8">
              Once you are clear about the business needs, look for companies that have the experience and expertise to
              work for clients like you. Also, look at the project completion rate, basic turnaround time, and
              operational hours to make an informed decision.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-5">3. Cost of resource outsourcing</h3>
            <p className=" font-light mb-8">
              Other than comparing the pricing related to different outsourcing models, you should also look at your
              budget for the same. The right selection should lie at the convergence of the internal budget and business
              requirements.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              How Connect Tech+Talent Can Help with Your Hiring Needs?
            </h2>

            <p className=" font-light mb-8">
              You know your business needs better than anyone else, which is why it is important to dig deeper into the
              differences between outsourcing models by yourself first. If you feel the need for external assistance in
              hiring the best talent pool, get in touch with Connect Tech+Talent – a trusted staffing agency based in
              Austin. For more information, Talk to a hiring expert today.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">FAQs</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-5">
              1. When should you go for nearshore resources?
            </h3>
            <p className=" font-light mb-8">
              Nearshore outsourcing can be preferred when you seek a balance between the quality of work and cost. You
              can also achieve smooth communication with this model of outsourcing.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-5">
              2. What should you consider while comparing offshore and nearshore resources?
            </h3>
            <p className=" font-light mb-8">
              Keep a check on the execution speed, execution risk, work competence, and time zone differences before
              making the final decision.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-5">
              3. Is offshore resource outsourcing more popular than the nearshore alternative?
            </h3>
            <p className=" font-light mb-8">
              Each of these outsourcing models has its own pros and cons. Hence, it would be inappropriate to claim any
              of them to be superior to the other. Consider various related factors mentioned to compare the differences
              between the two.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How can Connect Tech+Talent Help?</h2>

            <p className=" font-light mb-8">
              Connect Tech+Talent is in the business of finding the right talent for companies. Connect Tech+Talent
              takes the overbearing burden of finding human resources with the right skill set and lets companies focus
              on their core business. We specialise in IT jobs, helping businesses build and ramp up their technical
              staffing. We help build entire teams with the right set of skills in the technology that best suits their
              business.
            </p>

            <p className=" font-light mb-8">
              We at Connect Tech+Talent will also help you as a candidate to acquire most sought after technical skills
              and forward your candidature to leading enterprises with global reach.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-12">
              <h3 className=" font-semibold text-blue-900 mb-4">Ready to Optimize Your Hiring Strategy?</h3>
              <p className=" font-light text-blue-800 mb-4">
                Whether you're considering nearshore or offshore outsourcing, Connect Tech+Talent can help you make the
                right decision for your business needs.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Book a meeting with Hiring Consultant
              </Button>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

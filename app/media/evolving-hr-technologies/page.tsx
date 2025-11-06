import { Suspense } from "react"
import type { Metadata } from "next"
import EvolvingHRTechClientPage from "./evolving-hr-tech-client-page"

export const metadata: Metadata = {
  title: "Evolving HR Technologies & Their Impact On Hiring",
  description:
    "Discover how cutting-edge HR technologies like ATS, AI screening, and video interviewing are reshaping modern recruitment.",
}

export default function EvolvingHRTechPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }
    >
      <EvolvingHRTechClientPage />
    </Suspense>
  )
}

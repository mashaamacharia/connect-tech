import { Suspense } from "react"
import type { Metadata } from "next"
import MasteringAIDrivenHiringClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Mastering AI-Driven Hiring in the Modern Era",
  description:
    "A 14-step guide to mastering AI-driven hiring, from data collection to measuring success, for modern recruitment and contract staffing.",
}

export default function MasteringAIDrivenHiringPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <MasteringAIDrivenHiringClientPage />
    </Suspense>
  )
}

'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'

// Dynamically import NextStudio with no SSR to avoid the export * issue
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => ({ default: mod.NextStudio })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    ),
  }
)

// Dynamically import the config
const configPromise = import('../sanity.config').then((mod) => mod.default)

export default function StudioWrapper() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    }>
      <StudioContent />
    </Suspense>
  )
}

function StudioContent() {
  const [config, setConfig] = useState<any>(null)

  useEffect(() => {
    configPromise.then(setConfig)
  }, [])

  if (!config) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return <NextStudio config={config} />
}

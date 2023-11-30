import { Suspense } from "react"

export function lazyLoad(component: JSX.Element) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      { component }
    </Suspense>
  )
}


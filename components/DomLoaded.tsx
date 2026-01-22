"use client"

import { useEffect, useState } from "react"

export default function DomLoaded({ children }: { children: React.ReactNode }) {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return domLoaded ? children : null
}

import { useLayoutEffect, useState } from 'react'

interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
  passed: boolean
}

export function useCountdown(targetDate: Date): CountdownParts {
  const [now, setNow] = useState(() => Date.now())

  useLayoutEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = targetDate.getTime() - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true }
  }

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    passed: false,
  }
}
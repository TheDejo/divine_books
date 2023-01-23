import { useState, useEffect } from 'react'

const useDebouncedCallback = <T extends (...args: any[]) => any>(callback: T, delay: number): T => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

  const debouncedCallback = (...args: Parameters<T>): void => {
    clearTimeout(timeoutId)
    setTimeoutId(
      setTimeout(() => {
        callback(...args)
      }, delay)
    )
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId)
    }
  }, [timeoutId])

  return debouncedCallback as T
}

export default useDebouncedCallback

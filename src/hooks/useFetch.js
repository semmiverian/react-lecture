import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false))
  }, [url])

  return { data, isLoading }
}

/**
 * first render
 * 1. Component nya dipanggil
 * 2. limit = 5
 * 3. url => `https://randomuser.me/api/?results=5`
 *
 * Ketika buttonnya di tekan
 * 4. Button yang ditekan => limit 5 => 10
 * 5. Function nya di render ulang
 * 6. limit = 10
 * 7.  url => `https://randomuser.me/api/?results=10`
 *
 */
/**
 * {
 *  name: 'Full Stack Javascript',
 * salary: 1000000,
 * tags: ['Fullstack', 'react', 'express']
 * }
 */

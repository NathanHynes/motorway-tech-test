import {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {
  const cache = useRef({})
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) {
      return
    }
    const fetchData = async () => {
      console.time('fetch-images')
      try {
        if (cache.current[url]) {
          console.log('CACHE HIT')
          const data = cache.current[url]
          console.timeEnd('fetch-images')
          setData(data)
          setStatus('fetched')
        } else {
          console.log('CACHE MISS')
          const response = await fetch(url)
          const data = await response.json()
          console.timeEnd('fetch-images')
          cache.current[url] = data // set response in cache
          setData(data)
          setStatus('fetched')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  }, [url])

  return {status, data}
}

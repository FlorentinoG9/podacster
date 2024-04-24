'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function usePodcastList<T>() {
  const queryClient = useQueryClient()

  const queryKey = ['podcasts']
  const queryFn = async () => {
    try {
      const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', {
        method: 'GET',
      })
      return response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  }

  return useQuery({
    queryKey,
    queryFn,
    select: (data) => data.feed.entry,
    initialData: () => {
      // Check if we have anything in cache and return that, otherwise get initial data
      const cachedData = queryClient.getQueryData<T | undefined>([queryKey])
      if (cachedData) return cachedData
    },
  })
}

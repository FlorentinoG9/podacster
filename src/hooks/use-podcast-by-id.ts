import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export default function usePodcastById() {
  const queryClient = useQueryClient()
  const params = useParams()

  const podcastId = params.podcastId

  const queryKey = ['podcast', podcastId]

  const url = encodeURIComponent(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
  )

  const queryFn = async () => {
    const response = await fetch(`https://api.allorigins.win/get?url=${url}`, { method: 'GET' })
    return response.json()
  }

  return useQuery({
    queryKey,
    queryFn,
    select: (data) => JSON.parse(data.contents),
    initialData: () => {
      // Check if we have anything in cache and return that, otherwise get initial data
      const cachedData = queryClient.getQueryData([queryKey])
      if (cachedData) return cachedData
    },
  })
}

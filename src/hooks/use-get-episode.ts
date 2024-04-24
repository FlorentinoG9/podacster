import usePodcastById from '@/hooks/use-podcast-by-id'
import { Episode } from '@/lib/types'
import * as React from 'react'

export default function useGetEpisode({ episodeId }: Readonly<{ episodeId: string }>) {
  const episodes = usePodcastById()

  return React.useMemo<Episode | undefined>(() => {
    if (!episodes.data) return undefined

    return episodes.data.results.find((episode: Episode) => {
      return episode.trackId.toString() === episodeId
    })
  }, [episodes.data, episodeId])
}

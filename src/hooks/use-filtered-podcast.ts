import { filterSearch } from '@/components/filter-podcast'
import usePodcastList from '@/hooks/use-podcast-list'
import { Podcast } from '@/lib/types'
import { produce } from 'immer'
import { useAtomValue } from 'jotai'
import React from 'react'

export default function useFilteredPodcast() {
  const podcasts = usePodcastList()

  const search = useAtomValue(filterSearch)

  return React.useMemo<Podcast[]>(() => {
    if (!podcasts.data) return []

    const lowerSearch = search.toLowerCase()

    return produce<Podcast[]>(podcasts.data, (draft) => {
      return draft.filter((podcast: Podcast) => {
        const author = podcast['im:artist'].label.toLowerCase()
        const label = podcast['im:name'].label.toLowerCase()

        return author.includes(lowerSearch) || label.includes(lowerSearch)
      })
    })
  }, [podcasts.data, search])
}

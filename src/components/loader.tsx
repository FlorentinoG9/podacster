'use client'
import usePodcastById from '@/hooks/use-podcast-by-id'
import usePodcastList from '@/hooks/use-podcast-list'
import React from 'react'

export default function Loader() {
  const podcasts = usePodcastList()
  const podcast = usePodcastById()

  if (podcasts.isLoading || podcast.isLoading) {
    return (
      <div className='h-5 w-5 animate-pulse bg-blue-500 rounded-full'>
        <div />
      </div>
    )
  }

  return null
}

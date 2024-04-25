'use client'
import { Separator } from '@/components/ui/separator'
import usePodcastList from '@/hooks/use-podcast-list'
import { Podcast } from '@/lib/types'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

export default function PodcastDetails() {
  const params = useParams()
  const podcasts = usePodcastList()

  const podcast = React.useMemo(() => {
    if (!podcasts.data) return undefined

    return podcasts.data.find((podcast: Podcast) => podcast.id.attributes['im:id'] === params.podcastId)
  }, [podcasts.data, params.podcastId])

  if (podcasts.isLoading) return <div>Loading...</div>
  if (!podcast) return <div>No podcast found</div>

  return (
    <article className='max-w-sm w-full h-fit'>
      <header className='border rounded'>
        <h1 data-testid='podcast-details' className='sr-only'>
          Podcast
        </h1>
        <div className='py-5 px-10 flex items-center justify-center'>
          <Image
            src={podcast['im:image'][2].label}
            alt={podcast['im:name'].label}
            width={250}
            height={250}
            className='border rounded'
          />
        </div>
        <Separator />
        <div className='px-5 py-2'>
          <Link {...podcast['link'].attributes}>
            <h1>{podcast['title'].label}</h1>
            <p className='text-gray-500'>
              <span>by: {podcast['im:artist'].label}</span>
            </p>
          </Link>
        </div>
        <Separator />
        <div className='p-2 max-w-md'>
          <p>Description</p>
          <p className='whitespace-pre-line text-xs text-gray-500'>{podcast['summary'].label}</p>
        </div>
      </header>
    </article>
  )
}

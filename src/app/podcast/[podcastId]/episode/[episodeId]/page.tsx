'use client'

import useGetEpisode from '@/hooks/use-get-episode'
import { content } from '@/lib/test'

import * as React from 'react'

interface EpisodeViewProps {
  episodeId: string
}

export default function EpisodeView({ params: { episodeId } }: { params: EpisodeViewProps }) {
  const episode = useGetEpisode({ episodeId })

  return (
    <section className='flex-1 h-fit w-full border flex flex-col gap-5 p-5 rounded'>
      <header className='flex flex-col gap-2'>
        <h1 className='text-xl font-bold'>{episode?.trackName}</h1>
        <Description description={episode?.description} />
      </header>

      <footer className='w-full mt-auto'>
        <audio src={episode?.episodeUrl} controls className='w-full'></audio>
      </footer>
    </section>
  )
}

function Description({ description }: { description?: string }) {
  const descriptionRef = React.useRef<HTMLDivElement>(null)

  console.info('content', JSON.parse(content))

  React.useEffect(() => {
    if (descriptionRef.current && description) {
      descriptionRef.current.innerHTML = description
    }
  }, [description])

  return <div ref={descriptionRef} className='text-sm font-light whitespace-pre-wrap' />
}

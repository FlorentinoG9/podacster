'use client'

import { Podcast } from '@/lib/types'

import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import useFilteredPodcast from '@/hooks/use-filtered-podcast'

export default function Podcasts() {
  const podcasts = useFilteredPodcast()

  return (
    <ul
      data-testid='podcast-list'
      className='grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(250px,200px))] gap-10 place-content-between px-10'
    >
      {podcasts?.map((podcast: Podcast) => {
        const author = podcast['im:artist'].label
        const label = podcast['im:name'].label
        const image = podcast['im:image'][2].label
        const id = podcast.id.attributes['im:id']

        return (
          <li key={id} data-testid='podcast-item'>
            <Link href={`/podcast/${id}`} className='group'>
              <PodcastCard author={author} label={label} image={image} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function PodcastCard({ author, label, image }: { author: string; label: string; image: string }) {
  return (
    <section className='flex flex-col items-center'>
      <header>
        <Image src={image} alt={label} width={150} height={150} className='rounded-full border' priority />
      </header>
      <footer className='border h-32 shadow-md gap-2 pb-2 rounded flex items-center -mt-16 -z-10 w-56 flex-col justify-end group-hover:shadow-lg group-hover:bg-gray-100/50 duration-200'>
        <h3 className='text-sm text-center truncate w-52'>{label}</h3>
        <p className='text-xs text-gray-500 text-center truncate w-52'>
          <span>Author: {author}</span>
        </p>
      </footer>
    </section>
  )
}

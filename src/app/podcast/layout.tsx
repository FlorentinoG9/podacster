import PodcastDetails from '@/app/podcast/[podcastId]/_components/details'
import Loader from '@/components/loader'
import Link from 'next/link'
import * as React from 'react'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <section className='sticky top-0 z-10 backdrop-blur-lg'>
        <header className='border-b pt-4 pb-2 flex items-center justify-between px-10'>
          <Link href='/'>
            <h1 className='text-xl text-blue-700'>Podcaster</h1>
          </Link>
          <Loader />
        </header>
      </section>

      <article className='p-10 flex gap-5'>
        <PodcastDetails />
        {children}
      </article>
    </section>
  )
}

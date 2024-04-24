'use client'

import Skeleton from '@/app/podcast/[podcastId]/_components/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import usePodcastById from '@/hooks/use-podcast-by-id'
import { Episode } from '@/lib/types'
import { produce } from 'immer'
import Link from 'next/link'
import { Suspense } from 'react'

export default function PodcastView({ params }: { params: { podcastId: string } }) {
  const podcast = usePodcastById()

  if (podcast.isLoading) return <div>Loading...</div>
  if (podcast.isError) return <div>Error: {podcast.error.message}</div>
  if (!podcast.data) return <div>No podcast found</div>

  const podcastData = podcast?.data.results[0]

  if (!podcastData) return <div>No podcast found</div>

  const episodes = produce<Episode[]>(podcast.data.results, (draft) => {
    draft.shift()
  })

  return (
    <Suspense fallback={<Skeleton />}>
      <section className='flex gap-10 w-full'>
        <article className='w-full flex flex-col gap-5'>
          <header className='border rounded shadow w-full p-3'>
            <h2 className='text-xl font-bold'>Episodes: {episodes.length}</h2>
          </header>

          <footer className='border overflow-hidden overflow-y-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-full'>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {episodes.map((episode: Episode) => {
                  return (
                    <TableRow key={episode.trackId} className='odd:bg-slate-100 h-7 py-2'>
                      <TableCell>
                        <Link
                          href={`/podcast/${params.podcastId}/episode/${episode.trackId}`}
                          className='text-blue-500 hover:underline'
                        >
                          {episode.trackName}
                        </Link>
                      </TableCell>
                      <TableCell className='whitespace-nowrap'>
                        <ShowDate date={episode.releaseDate} />
                      </TableCell>
                      <TableCell>
                        <ShowDuration duration={episode.trackTimeMillis} />
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </footer>
        </article>
      </section>
    </Suspense>
  )
}

function ShowDuration({ duration }: { duration: number }) {
  function convertDuration(duration: number) {
    if (!duration) return '00:00:00'

    const SECOND = 1000
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60

    const durationInHours = duration / HOUR
    const durationInMinutes = (duration % HOUR) / MINUTE
    const durationInSeconds = ((duration % HOUR) % MINUTE) / SECOND

    const hours = getStringDuration(durationInHours)
    const minutes = getStringDuration(durationInMinutes)
    const seconds = getStringDuration(durationInSeconds)

    return `${hours}:${minutes}:${seconds}`
  }

  function getStringDuration(duration: number) {
    return String(Math.floor(duration)).padStart(2, '0')
  }

  return <span>{convertDuration(duration)}</span>
}

function ShowDate({ date }: { date: string }) {
  function formatDate(date: string) {
    const dateObj = new Date(date)
    return `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
  }

  return <span>{formatDate(date)}</span>
}

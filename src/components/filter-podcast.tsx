'use client'
import { Input } from '@/components/ui/input'
import useFilteredPodcast from '@/hooks/use-filtered-podcast'
import { atom, useAtom } from 'jotai'

export const filterSearch = atom('')

export default function FilterPodcast() {
  const [search, setSearch] = useAtom(filterSearch)
  const podcasts = useFilteredPodcast()

  return (
    <section className='flex items-center w-full gap-3 self-end pb-5 px-10'>
      <p className='shrink-0 bg-blue-500 text-white px-2 h-8 w-10 flex items-center justify-center rounded-md sm:ml-auto'>
        {podcasts?.length ?? 0}
      </p>

      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className='w-full flex-1 sm:w-96 sm:flex-none'
        placeholder='Filter podcast...'
      />
    </section>
  )
}

import Podcasts from '@/components/podcasts'
import FilterPodcast from '@/components/filter-podcast'
import Link from 'next/link'
import Loader from '@/components/loader'

export default function Home() {
  return (
    <section className='pb-10'>
      <section className='flex flex-col gap-2 sticky top-0 z-10 backdrop-blur-lg'>
        <header className='border-b pt-4 pb-2 flex items-center justify-between px-10'>
          <Link href='/'>
            <h1 className='text-xl text-blue-700'>Podcaster</h1>
          </Link>
          <Loader />
        </header>
        <FilterPodcast />
      </section>

      <Podcasts />
    </section>
  )
}

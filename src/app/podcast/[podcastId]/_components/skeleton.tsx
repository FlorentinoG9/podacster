import React from 'react'

export default function Skeleton() {
  return (
    <section className='flex flex-col w-full gap-5'>
      <div className='flex items-center justify-between border py-3 px-5 rounded animate-pulse'>
        <div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
          <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
        </div>
      </div>
      <div
        role='status'
        className='w-full p-4 space-y-4 border divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6'
      >
        <div className='flex items-center justify-between'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <div className='flex items-center justify-between pt-4'>
          <div>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12'></div>
        </div>
        <span className='sr-only'>Loading...</span>
      </div>
    </section>
  )
}

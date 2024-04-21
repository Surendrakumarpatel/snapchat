import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='w-[70%] ml-4'>
      <div className='flex mt-3 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className='flex items-center gap-1'>
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
        <div>
          <Skeleton className="h-10 w-[100px]" />
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-6 mt-10'>
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[450px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
      <div className='flex items-center gap-2 justify-between mt-56'>
        <Skeleton className="h-9 rounded-full w-full" />
        <Skeleton className="h-9 rounded-full w-[150px]" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  )
}

export default loading
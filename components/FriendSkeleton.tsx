import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const FriendSkeleton = () => {
    return (
        <div className='flex flex-col gap-3'>
            {
                [0, 0, 0, 0, 0, 0].map((item, idx) => {
                    return (
                        <div key={idx} className="flex items-center space-x-4 mt-5">
                            <Skeleton className="h-12 w-12 bg-[#E3E6E8] rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px] bg-[#E3E6E8]" />
                                <Skeleton className="h-4 w-[200px] bg-[#E3E6E8]" />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default FriendSkeleton
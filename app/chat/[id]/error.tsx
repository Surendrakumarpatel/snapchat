"use client"
import React from 'react'

const Error = ({error}:{error:Error}) => {
  return (
    <div className='flex items-center justify-center mx-auto '>
        <h1>{error.message}</h1>
    </div>
  )
}

export default Error
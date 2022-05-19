import React from 'react'
import { CarouselProps } from './Carousel'

export const CarouselViewport = ({ width, height, gap, ...rest }: CarouselProps): React.ReactElement => {
  const w = `w-[${width}]` // eslint-disable-line
  return (
    <div className={`transition-all w-[100%] mx-[auto]`} {...rest} /> // eslint-disable-line
  )
}

export const Steering = (props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  return (
    <div className='flex justify-end content-center w-full pt-2' {...props} />

  )
}

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement => {
  return (
    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 rounded-full first:mr-4' {...props} />
  )
}

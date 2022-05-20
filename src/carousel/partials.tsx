import React from 'react'
import { CarouselProps } from './Carousel'

export const CarouselViewport = ({ width, height, gap, ...rest }: CarouselProps): React.ReactElement => {
  const dynamicStyles = {
    width,
    height: `calc(${height} + '48px')`
  }
  return (
    <div style={dynamicStyles} className={`relative mx-[auto]`} {...rest} /> // eslint-disable-line
  )
}

export const Steering = (props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  return (
    <div className='flex justify-end content-center w-full pt-2' {...props} />

  )
}

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement => {
  return (
    <button className='bg-gray-500 hover:bg-gray-700 disabled:bg-gray-400 text-white p-2 rounded-full first:mr-4' {...props} />
  )
}

import React from 'react'
import { CarouselProps } from './Carousel'

export const CarouselViewport = ({ width, height, gap, ...rest }: CarouselProps): React.ReactElement => {
  const navigationHeight = '48px'
  const dynamicStyles = {
    width,
    height: `calc(${height} + ${navigationHeight})`
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
    <button className='bg-neutral-500 hover:bg-neutral-900 disabled:bg-neutral-300 text-white p-2 rounded-full first:mr-4' {...props} />
  )
}

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

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right'
}
export const Button = ({ direction, ...rest }: ButtonProps): React.ReactElement => {
  return (
    <button className='bg-neutral-500 hover:bg-neutral-900 disabled:bg-neutral-300 text-white p-2 rounded-full first:mr-4' {...rest}>
      <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1}>
        {
          direction === 'left' ? <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' /> : <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        }
      </svg>
    </button>
  )
}

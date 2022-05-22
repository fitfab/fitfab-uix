import * as React from 'react'
import { CarouselViewport, Steering, Button } from './partials'

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The children to be rendered inside the carousel.
   * This is an array of React.ReactNode or html elements.
   **/
  children: React.ReactNode

  /**
   * The width of the carousel default to `100%`
   */
  width: string
  /**
    * The height of the carousel default to `320px`
    */
  height: string

  /**
    * The space between(aka gutter or gap) each slides and
    * it should be in any we unit (px, %, em, rem, ...)
    * default to `24px`
    */
  gap: string
}

export const Carousel = ({
  children,
  width = '100%',
  height = '320px',
  gap = '24px',
  ...rest
}: CarouselProps): React.ReactElement => {
  const [position, setPosition] = React.useState({ x: 0 })
  const [isLastItem, setIsLastItem] = React.useState(false)
  const [isFirstItem, setIsFirstItem] = React.useState(true)
  const carouselContentRef = React.useRef<HTMLDivElement>(null)
  const scrollAmount = React.useRef(0)
  const init = React.useRef(false)
  const observer = React.useRef<IntersectionObserver | null>(null)

  function observeFirstAndLastSlide (): void {
    const options = {
      root: carouselContentRef.current,
      threshold: 0.9
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.getAttribute('data-slide') === '0'
            ? setIsFirstItem(true)
            : setIsLastItem(true)
        } else {
          entry.target.getAttribute('data-slide') === '0'
            ? setIsFirstItem(false)
            : setIsLastItem(false)
        }
      })
    }, options)

    observer.current.observe(carouselContentRef.current!.children[0]) // eslint-disable-line
    observer.current.observe(
      carouselContentRef.current!.children[ // eslint-disable-line
        carouselContentRef.current!.children.length - 1 // eslint-disable-line
      ]
    )
  }

  React.useLayoutEffect(() => {
    if (!init.current) {
      init.current = true
      scrollAmount.current = carouselContentRef.current!.clientWidth * 0.8 // eslint-disable-line
      observeFirstAndLastSlide()
      return
    }
    observeFirstAndLastSlide()
    carouselContentRef.current!.scrollBy({ // eslint-disable-line
      behavior: 'smooth',
      left: position.x
    })

    return () => {
      observer.current!.disconnect() // eslint-disable-line
    }
  }, [position])

  const shift = (e: React.MouseEvent<HTMLElement>): void => {
    e.persist()
    setPosition({
      x:
          e.currentTarget.dataset.direction === 'prev'
            ? -scrollAmount.current
            : scrollAmount.current
    })
  }

  return (
    <CarouselViewport width={width} height={height} gap={gap} {...rest} tabIndex={0}>
      <div style={{ gap }} ref={carouselContentRef} className='flex overflow-scroll scroll-smooth snap-x snap-mandatory w-fit children:flex-none children:snap-start'>{children}</div>
      <Steering>
        <Button
          onClick={shift}
          aria-label='previous'
          data-direction='prev'
          disabled={isFirstItem}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
          </svg>
        </Button>
        <Button
          onClick={shift}
          aria-label='next'
          data-direction='next'
          disabled={isLastItem}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
          </svg>
        </Button>
      </Steering>
    </CarouselViewport>
  )
}

import { render, screen } from '@testing-library/react'
import { hasClass } from '../../utils'
import { Button } from './Button'

it('renders correctly', () => {
  const { container } = render(
    <Button>Facebook</Button>
  )
  expect(container).toMatchSnapshot()
  const copy = screen.getByText('Facebook')
  expect(copy).toBeVisible()
  expect(copy).toHaveTextContent(/Facebook/i)
})

it('renders primary button correctly', () => {
  render(
    <Button primary>read</Button>
  )
  const button = screen.getByText('read')
  expect(hasClass(button, 'bg-black')).toBe(true)
})

it('renders secondary button correctly', () => {
  render(
    <Button primary={false}>learn</Button>
  )
  const button = screen.getByText('learn')
  expect(hasClass(button, 'bg-slate-500')).toBe(true)
})

import { render, screen } from '@testing-library/react'
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

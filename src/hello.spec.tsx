import {render, screen} from '@testing-library/react'
import Kanban from './kanban'

it('renders text "Kanban"', () => {
  render(<Kanban />)
  expect(screen.getByText('Kanban')).toBeInTheDocument()
})

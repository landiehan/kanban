import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Kanban from './kanban'

it('renders text "Kanban"', () => {
  render(<Kanban />)
  expect(screen.getByText('Kanban')).toBeInTheDocument()
})

it('renders add new task button', () => {
  render(<Kanban />)
  expect(
    screen.getByRole('button', {name: /add new task/i})
  ).toBeInTheDocument()
})

jest.mock('./add-new-task-form')

describe('clicking the add new task button', () => {
  it('displays add new task form', async () => {
    render(<Kanban />)
    const addNewTaskButton = screen.queryByRole('button', {
      name: /add new task/i,
    })
    expect(screen.queryByText('Mocked New Task Form')).not.toBeInTheDocument()
    await userEvent.click(addNewTaskButton)
    expect(screen.getByText('Mocked New Task Form')).toBeInTheDocument()
  })
})

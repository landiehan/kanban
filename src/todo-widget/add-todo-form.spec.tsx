import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodoForm from './add-todo-form'

describe('☕ Add todo form', () => {
  it('renders "New todo" field', () => {
    const handleSubmit = jest.fn()
    render(<AddTodoForm onSubmit={handleSubmit} />)

    expect(screen.getByPlaceholderText('New todo')).toBeInTheDocument()
  })

  it('renders add button', () => {
    const handleSubmit = jest.fn()
    render(<AddTodoForm onSubmit={handleSubmit} />)

    expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument()
  })

  describe('when clicking the add button', () => {
    it('calls the submit handler with new todo text', async () => {
      const user = userEvent.setup()
      const handleSubmit = jest.fn()
      render(<AddTodoForm onSubmit={handleSubmit} />)

      const newTodoTextbox = screen.getByPlaceholderText('New todo')
      const addButton = screen.getByRole('button', {name: /add/i})
      await user.type(newTodoTextbox, 'Make coffee')
      await user.click(addButton)

      expect(handleSubmit).toBeCalledTimes(1)
      expect(handleSubmit).toBeCalledWith('Make coffee')
    })
  })
})

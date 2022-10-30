import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodoButton from './add-todo-button'

describe('👻 add todo', () => {
  it('calls handler when clicked', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(<AddTodoButton onClick={handleClick} />)

    const addTodoButton = screen.queryByRole('button', {name: /Add todo/i})
    await user.click(addTodoButton)

    expect(handleClick).toBeCalledTimes(1)
  })
})

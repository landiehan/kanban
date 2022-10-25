import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddNewTaskForm from './add-new-task-form'

test('happy path', async () => {
  const handleSubmit = jest.fn()
  render(<AddNewTaskForm onSubmit={handleSubmit} />)

  const titleInput = screen.queryByRole('textbox', {name: /title/i})
  const descriptionInput = screen.queryByRole('textbox', {name: /description/i})
  const createTaskButton = screen.queryByRole('button', {name: /create task/i})

  await userEvent.type(titleInput, 'Take coffee break')
  await userEvent.type(
    descriptionInput,
    "It' always good to take a break. This 15 minutes break will recharge the batteries a litte."
  )
  screen.debug()
  await userEvent.click(createTaskButton)

  expect(handleSubmit).toBeCalledWith({
    title: 'Take coffee break',
    description:
      "It' always good to take a break. This 15 minutes break will recharge the batteries a litte.",
  })
})

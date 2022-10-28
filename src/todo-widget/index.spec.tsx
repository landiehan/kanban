import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoWidget from '.'

describe('🎃 Todo Widget', () => {
  describe('Initially', () => {
    beforeEach(() => {
      render(<TodoWidget />)
    })

    it('renders title "Todo"', () => {
      expect(screen.getByText('Todo')).toBeInTheDocument()
    })

    it('renders "No todos yet"', () => {
      expect(screen.getByText('No todos yet')).toBeInTheDocument()
    })

    it('renders "Add todo" button', () => {
      expect(
        screen.getByRole('button', {name: /Add todo/i})
      ).toBeInTheDocument()
    })
  })

  describe('When clicking the "Add todo" button', () => {
    it('renders a modal', async () => {
      const user = userEvent.setup()
      render(<TodoWidget />)

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

      const addTodoButton = screen.queryByRole('button', {name: /Add todo/i})
      await user.click(addTodoButton)

      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
  })
})

import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import TodoWidget from '.'
import {API} from '../api'

const server = setupServer(
  rest.get(API.todos, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          title: 'Make coffee',
        },
        {
          title: 'Drink coffee',
        },
      ])
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

  it('renders "No todos yet" when todo list is empty', async () => {
    server.use(
      rest.get(API.todos, (req, res, ctx) => {
        return res(ctx.json([]))
      })
    )
    render(<TodoWidget />)

    await waitFor(() => {
      expect(screen.getByText('No todos yet')).toBeInTheDocument()
    })
  })

  it('renders todos', async () => {
    render(<TodoWidget />)

    await waitFor(() => {
      expect(screen.getByText('Make coffee')).toBeInTheDocument()
      expect(screen.getByText('Drink coffee')).toBeInTheDocument()
    })
  })

  it('renders "500 Error" when server is down 👻', async () => {
    server.use(
      rest.get(API.todos, (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    render(<TodoWidget />)

    await waitFor(() => {
      expect(screen.getByText('500 Error')).toBeInTheDocument()
    })
  })
})

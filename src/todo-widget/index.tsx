import {useEffect, useState} from 'react'
import {getTodos} from '../api'

interface Todo {
  title: string
}

const TodoWidget = () => {
  const [showDialog, setShowDialog] = useState(false)

  const onAddTodo = () => {
    setShowDialog(true)
  }

  const [todos, setTodos] = useState<Todo[]>()
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const loadTodos = async () => {
      const res = await getTodos()
      if (res.ok) {
        const todos = await res.json()
        setTodos(todos)
      } else {
        setError('500 Error')
      }
    }

    loadTodos()
  }, [])

  return (
    <div>
      <div>Todo</div>
      <div>
        {error ? (
          error
        ) : todos && todos.length > 0 ? (
          <ul>
            {todos.map((todo, i) => (
              <li key={i}>{todo.title}</li>
            ))}
          </ul>
        ) : (
          'No todos yet'
        )}
      </div>
      <button onClick={onAddTodo}>Add todo</button>
      {showDialog && <div role="dialog"></div>}
    </div>
  )
}

export default TodoWidget

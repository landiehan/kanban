import {useState} from 'react'

const AddTodoForm = ({onSubmit}: {onSubmit: (newTodo: string) => void}) => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = () => {
    onSubmit(newTodo)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

export default AddTodoForm

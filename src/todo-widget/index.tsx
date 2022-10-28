import {useState} from 'react'

const TodoWidget = () => {
  const [showDialog, setShowDialog] = useState(false)

  const onAddTodo = () => {
    setShowDialog(true)
  }

  return (
    <div>
      <div>Todo</div>
      <div>No todos yet</div>
      <button onClick={onAddTodo}>Add todo</button>
      {showDialog && <div role="dialog"></div>}
    </div>
  )
}

export default TodoWidget

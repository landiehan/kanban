import {useState} from 'react'
import AddNewTaskForm from './add-new-task-form'

const Kanban = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <h1>Kanban</h1>
      <button onClick={() => setOpen(true)}>Add New Task</button>
      {open && <AddNewTaskForm />}
    </>
  )
}

export default Kanban

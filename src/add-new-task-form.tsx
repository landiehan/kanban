import {FormEvent} from 'react'

const AddNewTaskForm = ({onSubmit}: {onSubmit: ({}) => void}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const fieldValues = Object.fromEntries(formData.entries())
    console.log(Object.values(fieldValues))
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" />
      <label htmlFor="description">Description</label>
      <input id="description" type="text" />
      <button>Create Task</button>
    </form>
  )
}

export default AddNewTaskForm

import {createRoot} from 'react-dom/client'
import Kanban from './kanban'
import TodoWidget from './todo-widget'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <Kanban />
    <TodoWidget />
  </>
)

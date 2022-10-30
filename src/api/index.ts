const BASE = 'http://localhost:3000'

const getTodos = () => {
  return fetch(`${BASE}/todos`)
}

const API = {
  todos: `${BASE}/todos`,
}

export {getTodos, API}

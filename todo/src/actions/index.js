export const ADD_TODO = 'ADD_TODO'

export const addTodo = (todos) => {
  return {
    type: ADD_TODO,
    payload: todos
  }
}

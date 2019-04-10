import { ADD_TODO } from '../actions'

const initialState = {
  todos: [{ task: 'todo item #1' }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload }
        ]
      }
    default:
      return state
  }
}

import { createStore } from 'redux'

const defaultState = {
  name: '',
  email: '',
  password: '',
}
const add = 'add'
const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case add:
      state.name = action.paiload.name
      state.email = action.paiload.email
      state.password = action.paiload.password

      return { ...state }
    default:
      return state
  }
}
const store = createStore(reduser)
export { store, add }

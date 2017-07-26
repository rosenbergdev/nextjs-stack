const LOAD_USER = 'nextjs/app/LOAD_USER'

const initialState = {
  user: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_USER:
      return Object.assign({}, state, {
        user: action.user
      })
    default:
      return state
  }
}

export function loadUser(user) {
  return {
    type: LOAD_USER,
    user
  }
}

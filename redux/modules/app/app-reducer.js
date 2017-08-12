import { SAGA_DEMO, SAGA_DEMO_SUCCESS } from './app-types'

const initialState = {
  saga_demo: {
    id: 10
  }
}

// REDUCER
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAGA_DEMO:
      return Object.assign({}, state, {
        saga_demo: {
          id: action.id
        }
      })
    case SAGA_DEMO_SUCCESS:
      console.log('saga demo success')
      return state
    default:
      return state
  }
}

// ACTIONS
export function sageDemoTest(id) {
  return {
    type: SAGA_DEMO,
    id
  }
}

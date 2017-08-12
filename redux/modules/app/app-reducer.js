import { SAGA_DEMO, SAGA_DEMO_SUCCESS, APP_MODAL } from './app-types'

const initialState = {
  saga_demo: {
    id: 10
  },
  modal: {
    id: null
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
    case APP_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          id: action.options.id
        }
      }
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

export function modal(options = {}) {
  return {
    type: APP_MODAL,
    options
  }
}

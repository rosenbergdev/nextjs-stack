import {
  SAGA_DEMO,
  SAGA_DEMO_SUCCESS,
  APP_MODAL,
  NOTIFICATION
} from './app-types'

const initialState = {
  saga_demo: {
    id: 10
  },
  modal: {
    id: null
  },
  notification: {
    message: '',
    level: '',
    options: {},
    active: false
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
    case NOTIFICATION:
      return {
        ...state,
        notification: {
          message: action.options.text,
          level: typeof action.options === 'string' ? action.options : 'info',
          options: typeof action.options === 'object' ? action.options : {},
          active: action.active === undefined
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

export function notification(options = {}, active) {
  return {
    type: NOTIFICATION,
    options,
    active
  }
}

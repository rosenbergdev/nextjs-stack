import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS
} from './auth-types'

const initialState = {
  loading: false,
  loaded: false,
  user: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        loaded: true,
        user: {
          ...action.user
        }
      }
    case SAVE_USER:
      return {
        ...state,
        loading: true
      }
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: Boolean(action.user.name),
        user: action.user
      }
    case LOGOUT_USER:
      return {
        ...state,
        loading: true
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: false,
        user: {}
      }
    default:
      return state
  }
}

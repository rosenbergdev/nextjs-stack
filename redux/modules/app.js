const TEST = 'nextjs/app/TEST'

const initialState = {
  test: {
    id: 10
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, {
        test: {
          id: action.id
        }
      })
    default:
      return state
  }
}

export function test(id) {
  return {
    type: TEST,
    id
  }
}

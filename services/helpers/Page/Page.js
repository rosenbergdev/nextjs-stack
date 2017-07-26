import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { get } from 'lodash'

import { loadUser } from 'redux/modules/auth'
import { initStore } from 'redux/store'

function decorator(config = {}) {
  return ComposedComponent => {
    @withRedux(
      initStore,
      ({ auth }) => ({
        user: auth.user
      }),
      { loadUser }
    )
    class Page extends Component {
      static async getInitialProps({ store }) {
        if (get(store.getState(), 'auth.user.id')) {
          return
        }

        const res = await fetch('http://localhost:3000/loadAuth')
        const json = await res.json()

        store.dispatch(loadUser(json))
      }

      render() {
        return <ComposedComponent {...this.props} />
      }
    }
    return Page
  }
}

export default decorator

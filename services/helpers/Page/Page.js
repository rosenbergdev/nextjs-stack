import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { get } from 'lodash'
import { fetch } from 'utils/fetch'
// import

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

        const res = await fetch('/loadAuth', {
          self: true
        })

        try {
          const json = await res.json()
          store.dispatch(loadUser(json))
        } catch (error) {
          console.log('Calling loadAuth failed')
        }
      }

      render() {
        return <ComposedComponent {...this.props} />
      }
    }
    return Page
  }
}

export default decorator

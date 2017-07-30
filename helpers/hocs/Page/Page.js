import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import { get } from 'lodash'

import api from 'utils/api'
import { loadUser } from 'redux/modules/auth'
import { initStore } from 'redux/store'

function hoc(params = {}) {
  return ComposedComponent => {
    @withRedux(
      initStore,
      ({ auth }) => ({
        user: auth.user
      }),
      { loadUser }
    )
    class Page extends Component {
      static async getInitialProps({ req, store }) {
        const isServer = typeof window === 'undefined'

        if (!get(store.getState(), 'auth.loaded') && params.restricted) {
          Router.push('/restricted')
        }

        if (get(store.getState(), 'auth.loaded') || !isServer) {
          // user loaded or called from client
          return
        }

        const res = await api('/load-auth', { req })

        try {
          if (res.data) {
            store.dispatch(loadUser(res.data))
          }
        } catch (error) {
          console.log('err', error)
        }
      }

      render() {
        return <ComposedComponent {...this.props} />
      }
    }
    return Page
  }
}

export default hoc

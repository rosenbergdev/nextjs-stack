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
      static async getInitialProps({ req, res, store }) {
        const isServer = typeof window === 'undefined'

        if (!isServer && !params.restricted) {
          // user load was already called
          return
        }

        const response = await api('/load-auth', { req })

        try {
          if (response.data) {
            if (!get(response, 'data.name') && params.restricted) {
              if (res) {
                res.redirect('/restricted')
                return
              }
              Router.push('/restricted')
            }

            store.dispatch(loadUser(response.data))
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

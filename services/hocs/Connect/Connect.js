import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import { initStore } from 'redux/store'

function decorator(stateToProps, dispatchToProps) {
  return ComposedComponent => {
    @withRedux(initStore, stateToProps, dispatchToProps)
    class Connect extends Component {
      render() {
        return <ComposedComponent {...this.props} />
      }
    }
    return Connect
  }
}

export default decorator

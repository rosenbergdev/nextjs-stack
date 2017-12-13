import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { get } from 'lodash'

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    hasError: false
  }

  componentDidCatch = () => {
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    return (
      <div>
        {hasError && (
          <span>
            Component {get(children, 'type.displayName')} failed to render
          </span>
        )}
        {!hasError && children}
      </div>
    )
  }
}

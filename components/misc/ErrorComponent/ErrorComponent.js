import React, { Component } from 'react'
// import { PropTypes } from 'prop-types'
// import { get } from 'lodash'

export default class ErrorComponent extends Component {
  static propTypes = {}

  state = {
    data: {
      id: 10
    },
    err: null
  }

  handleBreak = () => {
    this.setState({ data: null })
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <span>ID is {data.id}. </span>
        <button onClick={this.handleBreak}>break component</button>
      </div>
    )
  }
}

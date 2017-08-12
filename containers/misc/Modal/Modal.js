import React, { Component } from 'react'
// import { PropTypes } from 'prop-types'
// import { get } from 'lodash'
import ReactModal from 'react-modal'

export default class Modal extends Component {
  static propTypes = {}

  state = {
    open: false
  }

  componentDidMount = () => {
    console.log('here')
  }

  handleClick = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Open modal</button>
        <ReactModal isOpen={this.state.open} contentLabel="Modal">
          <h1>Modal Content</h1>
          <button onClick={this.handleClose}>Close modal</button>
        </ReactModal>
      </div>
    )
  }
}

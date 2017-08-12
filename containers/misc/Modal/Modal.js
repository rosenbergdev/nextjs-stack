import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'

import { modal as modalAction } from 'redux/modules'

@connect(
  ({ app }) => ({
    modal: app.modal
  }),
  { modalAction }
)
export default class Modal extends Component {
  static propTypes = {
    modal: PropTypes.object.isRequired,
    modalAction: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }

  state = {
    open: false
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.modal.id !== nextProps.modal.id && !nextProps.modal.id) {
      this.handleClose()
    }
  }

  handleClose = () => {
    this.props.modalAction({ id: null })
  }

  render() {
    const { modal, id } = this.props

    return (
      <ReactModal isOpen={id === modal.id} contentLabel="Modal">
        <h1>Modal Content</h1>
        <button onClick={this.handleClose}>Close modal</button>
      </ReactModal>
    )
  }
}

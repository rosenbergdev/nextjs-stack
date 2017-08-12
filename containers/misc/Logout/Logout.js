import React, { Component } from 'react'
// import { PropTypes } from 'prop-types'
// import { get } from 'lodash'
import { connect } from 'react-redux'
import { logout } from 'redux/modules'

@connect(null, { logout })
export default class Logout extends Component {
  static propTypes = {}

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    return <span onClick={this.handleLogout}>Logout</span>
  }
}

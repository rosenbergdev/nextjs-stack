import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
// import { get } from 'lodash'
import { connect } from 'react-redux'
import { logout } from 'redux/modules'

@connect(
  ({ auth }) => ({
    user: auth.user
  }),
  { logout }
)
export default class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object
  }

  static defaultProps = {
    user: {}
  }

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    const { user } = this.props

    return [
      user.name && <strong key="name">{user.name} - </strong>,
      <span key="action" role="presentation" onClick={this.handleLogout}>
        Logout
      </span>
    ]
  }
}

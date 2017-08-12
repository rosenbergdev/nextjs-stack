import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system'

import { notification } from 'redux/modules'

@connect(
  state => ({
    app: state.app
  }),
  { notification }
)
export default class Notification extends Component {
  static propTypes = {
    notification: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {}
    this.notify = null
  }

  componentDidMount() {
    this.notify = this.notificationSystem
  }

  componentWillReceiveProps(nextProps) {
    const { message, level, active, options } = nextProps.app.notification

    // return if notification has not been set as active
    if (!active) {
      return
    }

    this.notify.addNotification({
      message,
      level: options.status || level,
      position: 'bc',
      autoDismiss: 6,
      onRemove: this.handleRemove()
    })
  }

  handleRemove() {
    this.props.notification({}, false)
  }

  render() {
    return (
      <NotificationSystem
        ref={el => {
          this.notificationSystem = el
        }}
      />
    )
  }
}

import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Field } from 'redux-form'

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string
  }

  renderField = field => {
    const { type, placeholder } = this.props
    const { input } = field

    return (
      <div>
        <input {...input} type={type || 'text'} placeholder={placeholder} />
      </div>
    )
  }

  render() {
    const { label, name } = this.props

    return (
      <div>
        <label htmlFor={name}>
          {label}
        </label>
        <Field id={name} name={name} component={this.renderField} />
      </div>
    )
  }
}

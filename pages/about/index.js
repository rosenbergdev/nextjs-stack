import React, { Component } from 'react'
import { get } from 'lodash'

export default class About extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        About <br />
        {get(this.props, 'url.query.id')}
      </div>
    )
  }
}

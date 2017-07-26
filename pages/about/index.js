import React, { Component } from 'react'
import { get } from 'lodash'
import { Header } from 'components/layout'
import { page } from 'services/helpers'

@page()
export default class About extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Header />
        About <br />
        {get(this.props, 'url.query.id')}
      </div>
    )
  }
}

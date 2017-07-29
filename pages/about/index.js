import React, { Component } from 'react'
import { get } from 'lodash'
import { Header } from 'components/layout'
import { page } from 'services/hocs'

@page()
export default class About extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Header />
        <h2>About page</h2>
        route param: {get(this.props, 'url.query.id')}
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Header } from 'components/layout'

import { test } from 'redux/modules/app'
import { loadUser } from 'redux/modules/auth'
import { page } from 'services/helpers'

@page()
export default class App extends Component {
  static propTypes = {}

  handleClick = () => {
    this.props.test(20)
  }

  render() {
    return (
      <div>
        <Header />
        <h2>Home</h2>
        <button onClick={this.handleClick}>test</button>
      </div>
    )
  }
}

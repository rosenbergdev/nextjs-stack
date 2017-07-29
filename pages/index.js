import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'

import { Header } from 'components/layout'
import { sageDemoTest } from 'redux/modules/app'
import { loadUser } from 'redux/modules/auth'
import { page } from 'services/helpers'

import { connect } from 'services/helpers'

@page()
@connect(null, { sageDemoTest })
export default class App extends Component {
  static propTypes = {}

  handleClick = () => {
    this.props.sageDemoTest(20)
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

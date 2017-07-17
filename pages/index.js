import React, { Component } from 'react'
import { Header } from 'components/layout'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import { test } from 'redux/modules/app'

@withRedux(initStore, null, { test })
export default class App extends Component {
  static propTypes = {}

  handleClick = () => {
    this.props.test(20)
  }

  render() {
    return (
      <div>
        App root
        <Header />
        <button onClick={this.handleClick}>test</button>
      </div>
    )
  }
}

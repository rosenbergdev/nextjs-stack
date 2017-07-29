import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
// import { Box } from 'grid-styled'

import { Container, Header, Title, Button } from 'components/layout'
import { sageDemoTest } from 'redux/modules/app'
import { page, connect } from 'helpers/hocs'

@page()
@connect(null, { sageDemoTest })
export default class App extends Component {
  static propTypes = {
    sageDemoTest: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.sageDemoTest(20)
  }

  render() {
    return (
      <Container>
        <Title>Home page</Title>
        <Header />
        <h2>Home</h2>
        <Button onClick={this.handleClick}>Call saga</Button>
      </Container>
    )
  }
}

import React, { Component } from 'react'
import Head from 'next/head'
import { PropTypes } from 'prop-types'
import { Box } from 'grid-styled'

import { Container, Header, Title, Button } from 'components/layout'
import { sageDemoTest } from 'redux/modules/app'
import { loadUser } from 'redux/modules/auth'
import { page, connect } from 'helpers/hocs'

@page()
@connect(
  ({ auth }) => ({
    user: auth.user
  }),
  { sageDemoTest }
)
export default class App extends Component {
  static propTypes = {
    sageDemoTest: PropTypes.func.isRequired,
    user: PropTypes.object,
    loadUser: PropTypes.func.isRequired
  }

  static defaultProps = {
    user: {}
  }

  handleClick = () => {
    this.props.sageDemoTest(20)
  }

  handleLoadAuth = () => {
    this.props.loadUser(20)
  }

  render() {
    return (
      <Container>
        <Head>
          <title>Home page</title>
        </Head>
        <Title>Home page</Title>
        <Header />
        <h2>Home</h2>
        {this.props.user.name}
        <Box mb={10}>
          <Button onClick={this.handleClick}>Call saga</Button>
        </Box>
        <Button onClick={this.handleLoadAuth}>Load user (call session)</Button>
      </Container>
    )
  }
}

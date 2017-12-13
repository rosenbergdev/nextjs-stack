import React, { Component } from 'react'
import Head from 'next/head'

import { Container, Header, Title, Icon } from 'components/layout'
import { page } from 'helpers/hocs'

@page()
export default class App extends Component {
  render() {
    return (
      <Container>
        <Head>
          <title>Home page</title>
        </Head>
        <Header dynamicContent={<Title>Hello</Title>} />
        <p>
          <Icon ico="chat" />
        </p>
      </Container>
    )
  }
}

import React, { Component } from 'react'
import Head from 'next/head'
import { get } from 'lodash'
import { Container, Header, Title } from 'components/layout'
import { page } from 'helpers/hocs'

@page()
export default class About extends Component {
  static propTypes = {}

  render() {
    return (
      <Container>
        <Head>
          <title>About page</title>
        </Head>
        <Title>About page</Title>
        <Header />
        <h2>About page</h2>
        route param: {get(this.props, 'url.query.id')}
      </Container>
    )
  }
}

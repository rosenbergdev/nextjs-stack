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
        <Header dynamicContent={<Title>About page</Title>} />
        <p>Next js router works differently compared to RR v1-v4. Use alias:</p>
        <pre>Link href="/about?id=10" as="/about/10"</pre>
        <p>will display this url</p>
        <span>To get param value</span>{' '}
        <strong>{get(this.props, 'url.query.id')}</strong>
        <pre>get(this.props, 'url.query.id')</pre>
      </Container>
    )
  }
}

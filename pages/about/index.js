import React, { Component } from 'react'
import Head from 'next/head'
import { get } from 'lodash'
import dynamic from 'next/dynamic'

import { Container, Header, Title, Button } from 'components/layout'
import { page } from 'helpers/hocs'

const LoadedDynamicComponent = dynamic(
  import('components/misc/DynamicComponent/DynamicComponent')
)

@page()
export default class About extends Component {
  static propTypes = {}

  state = {
    AsyncComponent: null
  }

  handleClick = () => {
    const AsyncComponent = dynamic(
      import('components/misc/DynamicComponentAnother/DynamicComponentAnother')
    )

    this.setState({
      AsyncComponent
    })
  }

  render() {
    const { AsyncComponent } = this.state

    return (
      <Container>
        <Head>
          <title>About page</title>
        </Head>
        <Title>About page</Title>
        <Header />
        <h2>About page</h2>
        route param: {get(this.props, 'url.query.id')}
        <h2>Dynamic component</h2>
        <LoadedDynamicComponent />
        <br />
        <br />
        <Button onClick={this.handleClick}>Load another</Button>
        {AsyncComponent && <AsyncComponent />}
      </Container>
    )
  }
}

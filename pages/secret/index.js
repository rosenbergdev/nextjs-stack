import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Head from 'next/head'
import { connect } from 'react-redux'
import { Box } from 'grid-styled'

import { Container, Header, Title } from 'components/layout'
import { page } from 'helpers/hocs'

@page({
  restricted: true
})
@connect(({ auth }) => ({
  user: auth.user
}))
export default class Secret extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    return (
      <Container>
        <Head>
          <title>Restricted page</title>
        </Head>
        <Title>Restricted page</Title>
        <Header />
        <Box mb={10} mt={30}>
          Name stored in redis: <strong>{this.props.user.name}</strong>
        </Box>
      </Container>
    )
  }
}

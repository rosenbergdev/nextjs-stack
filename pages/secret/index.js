import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Head from 'next/head'
import { connect } from 'react-redux'
import { Box } from 'grid-styled'
import { reduxForm } from 'redux-form'

import { Container, Header, Title, Button } from 'components/layout'
import { page } from 'helpers/hocs'
import { saveUser } from 'redux/modules'
import { Input } from 'components/fields'

@page({
  restricted: true
})
@connect(
  ({ auth }) => ({
    user: auth.user
  }),
  { saveUser }
)
@reduxForm({
  form: 'test'
})
export default class Secret extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    saveUser: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  handleSaveUser = fields => {
    this.props.saveUser(fields)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Container>
        <Head>
          <title>Restricted page</title>
        </Head>

        <Header dynamicContent={<Title>Restricted page</Title>} />

        <h3>Redis</h3>

        <Box mb={10} mt={30}>
          Name stored in redis: <strong>{this.props.user.name}</strong>
        </Box>

        <Box mb={10} mt={30}>
          <form onSubmit={handleSubmit(this.handleSaveUser)}>
            <Input name="name" label="Username" />
            <br />
            <Button>Save user to Redis</Button>
          </form>
        </Box>
      </Container>
    )
  }
}

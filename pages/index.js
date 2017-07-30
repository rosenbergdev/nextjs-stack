import React, { Component } from 'react'
import Head from 'next/head'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Box } from 'grid-styled'

import { Container, Header, Title, Button } from 'components/layout'
import { Input } from 'components/fields'
import { sageDemoTest } from 'redux/modules/app'
import { saveUser } from 'redux/modules/auth'
import { page } from 'helpers/hocs'

@page()
@connect(
  ({ auth }) => ({
    user: auth.user
  }),
  { sageDemoTest, saveUser }
)
@reduxForm({
  form: 'test'
})
export default class App extends Component {
  static propTypes = {
    sageDemoTest: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    user: PropTypes.object,
    saveUser: PropTypes.func.isRequired
  }

  static defaultProps = {
    user: {}
  }

  handleClick = () => {
    this.props.sageDemoTest(20)
  }

  handleSaveUser = fields => {
    this.props.saveUser(fields)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Container>
        <Head>
          <title>Home page</title>
        </Head>
        <Title>Home page</Title>
        <Header />
        <h2>Home</h2>
        <Box mb={10}>
          <Button onClick={this.handleClick}>Call saga demo dwatcher</Button>
        </Box>
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

import React, { Component } from 'react'
import Head from 'next/head'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Box } from 'grid-styled'

import { Modal } from 'containers/misc'
import { Container, Header, Title, Button } from 'components/layout'
import { Input } from 'components/fields'
import { sageDemoTest, saveUser, modal } from 'redux/modules'
import { page } from 'helpers/hocs'

@page()
@connect(
  ({ auth }) => ({
    user: auth.user
  }),
  { sageDemoTest, saveUser, modal }
)
@reduxForm({
  form: 'test'
})
export default class App extends Component {
  static propTypes = {
    sageDemoTest: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    modal: PropTypes.func.isRequired,
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
          <Button onClick={this.handleClick}>Call saga demo watcher</Button>
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

        <h2>Modal</h2>

        <Button onClick={() => this.props.modal({ id: 'modal-demo-id' })}>
          Open Modal
        </Button>

        <Modal id="modal-demo-id" />
      </Container>
    )
  }
}

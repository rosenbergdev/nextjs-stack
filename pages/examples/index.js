import React, { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Box } from 'grid-styled'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

import { Modal } from 'containers/misc'
import { Container, Header, Title, Button } from 'components/layout'
import { page } from 'helpers/hocs'
import { modal, notification, sageDemoTest } from 'redux/modules'
import { ErrorComponent, ErrorBoundary } from 'components/misc'

const LoadedDynamicComponent = dynamic(
  import('components/misc/DynamicComponent/DynamicComponent')
)

@page()
@connect(null, { modal, notification, sageDemoTest })
export default class Examples extends Component {
  static propTypes = {
    modal: PropTypes.func.isRequired,
    sageDemoTest: PropTypes.func.isRequired,
    notification: PropTypes.func.isRequired
  }

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

  handleClickSaga = () => {
    this.props.sageDemoTest(20)
  }

  render() {
    const { AsyncComponent } = this.state

    return (
      <Container>
        <Head>
          <title>Examples page</title>
        </Head>
        <Header dynamicContent={<Title>Examples</Title>} />

        <h3>Saga</h3>
        <Box mb={10}>
          <Button onClick={this.handleClickSaga}>Call saga</Button>
        </Box>

        <h3>Error handling</h3>
        <ErrorComponent />
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>

        <h3>Async component load</h3>
        <Box mb={30} mt={10}>
          <LoadedDynamicComponent />
        </Box>

        {!AsyncComponent && (
          <Button onClick={this.handleClick}>Load another</Button>
        )}
        {AsyncComponent && <AsyncComponent />}
        <h3>Modal</h3>
        <Button onClick={() => this.props.modal({ id: 'modal-demo-id' })}>
          Open Modal
        </Button>
        <Modal id="modal-demo-id" />
        <h3>Notifications</h3>
        <Button
          onClick={() => this.props.notification({ text: 'Notification text' })}
        >
          Show notification
        </Button>
      </Container>
    )
  }
}

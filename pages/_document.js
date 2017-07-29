import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet'

export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)

    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx() {
    return (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Next app!"
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]}
      />
    )
  }

  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
          {styleTags}
        </Head>
        <body className="custom_class" {...this.helmetBodyAttrComponents}>
          {this.props.customValue}
          {main}
          <NextScript />
        </body>
      </html>
    )
  }
}

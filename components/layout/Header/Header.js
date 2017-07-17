import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Link href="about?id=10" as="about/10" prefetch>
          <a>here</a>
        </Link>
      </div>
    )
  }
}

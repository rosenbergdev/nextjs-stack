import React from 'react'
import Link from 'next/link'

import { List, ListItem } from 'components/layout'

const Header = () =>
  <List>
    <ListItem>
      {' '}<Link href="/" prefetch>
        <a>Home</a>
      </Link>
    </ListItem>
    <ListItem>
      {' '}<Link href="/about?id=10" as="/about/10" prefetch>
        <a>About</a>
      </Link>
    </ListItem>
  </List>

export default Header

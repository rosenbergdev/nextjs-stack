import React from 'react'
import Link from 'next/link'
import { Grid } from 'grid-styled'

import { Logout } from 'containers/misc'
import { List, ListItem } from 'components/layout'

const Header = () =>
  <div>
    <Grid width={1 / 2}>
      <List>
        <ListItem>
          <Link href="/" prefetch>
            <a>Home</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/about?id=10" as="/about/10">
            <a>About</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/secret" as="/secret" prefetch>
            <a>Restricted page</a>
          </Link>
        </ListItem>
      </List>
    </Grid>
    <Grid width={1 / 2}>
      <Logout />
    </Grid>
  </div>

export default Header

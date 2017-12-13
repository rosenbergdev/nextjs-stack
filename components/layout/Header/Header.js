import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Flex, Grid } from 'grid-styled'

import { Logout } from 'containers/misc'
import { List, ListItem } from 'components/layout'

const Header = ({ dynamicContent }) => (
  <Flex align="center">
    <Grid width={1 / 3}>{dynamicContent}</Grid>
    <Grid width={1 / 3}>
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
          <Link href="/examples">
            <a>Examples</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/secret" as="/secret" prefetch>
            <a>Restricted page</a>
          </Link>
        </ListItem>
      </List>
    </Grid>
    <Grid width={1 / 3} style={{ textAlign: 'right' }}>
      <Logout />
    </Grid>
  </Flex>
)

Header.propTypes = {
  dynamicContent: PropTypes.node
}

Header.defaultProps = {
  dynamicContent: null
}

export default Header

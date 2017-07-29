import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const Title = ({ children, className }) =>
  <h1 className={className}>
    {children}
  </h1>

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

Title.defaultProps = {
  className: ''
}

const StyledTitle = styled(Title)`
  font-size: 1.4em;
  text-align: center;
  color: black;
`

export default StyledTitle

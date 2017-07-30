import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const Button = ({ children, className, onClick, type }) =>
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}

Button.defaultProps = {
  className: '',
  type: 'submit',
  onClick: undefined
}

const StyledButton = styled(Button)`
  background: #337ab7;
  background: ${props => props.secondary && '#5cb85c'};
  border: 1px solid #2e6da4;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  cursor: pointer;
`

export default StyledButton

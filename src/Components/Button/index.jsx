import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = (props) => {
  return (
    <button className={`button ${props.variant} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.buttonText}
    </button>
  )
}

Button.defaultProps = {
    onClick: () => {},
    disabled: false,
    buttonText: '',
    className: '',
    variant: 'primary'
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    variant: PropTypes.string
}

export default Button
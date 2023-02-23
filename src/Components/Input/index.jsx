import React from 'react'
import PropTypes from 'prop-types'
import './input.scss'

const Input = (props) => {
  return (
    <div className='input-wrapper'>
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={`input ${props.className}`}
            disabled={props.disabled}
            onChange={props.onChange}
            value={props.value}
        />
    {props?.error && (<label className='error-message'>{props.errorMessage}</label>)}
    </div>
  )
}

Input.defaultProps = {
    type: '',
    placeholder: '',
    className: 'primary',
    disabled: false,
    onChange:() => {},
    value: ''
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}


export default Input
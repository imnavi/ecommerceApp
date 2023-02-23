import React from 'react'
import './popUp.scss'

const PopUp = (props) => {
  return (
    <div className='overlay'>
        <div className='popUp'></div>
        {props.children}
    </div>
  )
}

export default PopUp
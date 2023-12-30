import React from 'react'
import './Footer.css'

const Footer = (props) => {
  return (
    <div className='footer-div'>
    <footer className='save-segment'>
    <button className='save-seg' onClick={props.handleSaveSegment}>Save the segment</button>
    <button className='cancel' onClick={props.onClose}>Cancel</button>
    </footer>
    </div>
  )
}

export default Footer
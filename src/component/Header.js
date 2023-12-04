import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div  className='header'>
    <Container className='h-100'>
      <Link to="/">
        <div className='logo h-100 d-flex align-items-center '>
        <FontAwesomeIcon icon={faBoxOpen} className='logo-icon'/>
        <h2 className='logo-header'>SHANTA</h2>
        </div>
        </Link> 
    </Container>
    </div>
  )

}

export default Header
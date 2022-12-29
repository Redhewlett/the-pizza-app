import React, { useState, useEffect } from 'react'
import Link from 'next/link'
//styles
import { NavBar } from './Nav.styles'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCompass, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Nav: React.FC = () => {
  return (
    <NavBar>
      <h1>
        <Link href='/' className='titleLink'>
          Let&apos;s Make Pizza
        </Link>
      </h1>
    </NavBar>
  )
}

export default Nav

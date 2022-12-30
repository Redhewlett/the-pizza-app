import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
//styles
import { NavBar } from './Nav.styles'

function CirclePlus() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' />
    </svg>
  )
}

function Discover() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
      <path d='M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM247.4 283.8c-3.7 3.7-6.2 4.2-7.4 4.2s-3.7-.5-7.4-4.2c-3.8-3.7-8-10-11.8-18.9c-6.2-14.5-10.8-34.3-12.2-56.9h63c-1.5 22.6-6 42.4-12.2 56.9c-3.8 8.9-8 15.2-11.8 18.9zm42.7-9.9c7.3-18.3 12-41.1 13.4-65.9h31.1c-4.7 27.9-21.4 51.7-44.5 65.9zm0-163.8c23.2 14.2 39.9 38 44.5 65.9H303.5c-1.4-24.7-6.1-47.5-13.4-65.9zM368 192c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128zM145.3 208h31.1c1.4 24.7 6.1 47.5 13.4 65.9c-23.2-14.2-39.9-38-44.5-65.9zm31.1-32H145.3c4.7-27.9 21.4-51.7 44.5-65.9c-7.3 18.3-12 41.1-13.4 65.9zm56.1-75.8c3.7-3.7 6.2-4.2 7.4-4.2s3.7 .5 7.4 4.2c3.8 3.7 8 10 11.8 18.9c6.2 14.5 10.8 34.3 12.2 56.9h-63c1.5-22.6 6-42.4 12.2-56.9c3.8-8.9 8-15.2 11.8-18.9z' />
    </svg>
  )
}
function Info() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z' />
    </svg>
  )
}

const Nav: React.FC = () => {
  const router = useRouter()
  return (
    <NavBar>
      <h1>
        <Link href='/' className='titleLink'>
          Let&apos;s Make Pizza
        </Link>
      </h1>
      <ul>
        <li>
          <Link href='/create' className={router.pathname == '/create' ? 'active' : ''}>
            Create
            <CirclePlus />
          </Link>
        </li>
        <li>
          <Link href='/aboutPizza' className={router.pathname == '/aboutPizza' ? 'active' : ''}>
            Culture
            <Discover />
          </Link>
        </li>
        <li>
          <Link href='/about' className={router.pathname == '/about' ? 'active' : ''}>
            About <Info />
          </Link>
        </li>
      </ul>
    </NavBar>
  )
}

export default Nav

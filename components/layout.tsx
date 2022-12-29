import React from 'react'
import Nav from './UI/Nav/Nav'

type LayoutProps = React.PropsWithChildren<{}>

export default function Layout({ children, ...otherProps }: LayoutProps) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}

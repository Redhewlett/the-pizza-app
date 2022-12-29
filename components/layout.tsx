import React from 'react'

type LayoutProps = React.PropsWithChildren<{}>

export default function Layout({ children, ...otherProps }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

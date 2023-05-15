import React, { PropsWithChildren, ReactElement } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: PropsWithChildren<unknown>): ReactElement  => {
  return (
    <div className='app'>
        <Header />
        <div className='layout'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout
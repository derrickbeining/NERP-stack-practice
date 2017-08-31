import React from 'react'
import TabNav from './TabNav'
import Footer from './Footer'

function NavFooter ({children}) {
  return (
    <div>
      <TabNav />
      {children}
      <Footer />
    </div>
  )
}

export default NavFooter

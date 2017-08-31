import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default NavFooterWrap

function NavFooterWrap ({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

import React from 'react'

import Navbar from './Navbar'
// import Footer from './Footer'


function NavFooterWrap ({children}) {
  return (
    <div>
      <Navbar >
        {children}
      </Navbar>
    </div>
  )
}

export default NavFooterWrap

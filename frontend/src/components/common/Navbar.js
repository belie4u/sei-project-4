import React from 'react'
import { withRouter } from 'react-router-dom'
// import NavBarContent from './NavbarContent'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
//import {isMobile} from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'


const Navbar = () => { 
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  return (isTabletOrMobileDevice ? <MobileNav /> : <DesktopNav /> )
  // const isMobile = useMediaQuery({ query: '(max-width: 760px)' })
  // return (isMobile ? <MobileNav /> : <DesktopNav />)
}
export default withRouter(Navbar)


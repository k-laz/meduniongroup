/*  ./components/Navbar.jsx     */

import { useState } from 'react'
import { HamburgerButton } from './HamburgerButton'
import { Logo } from './Logo'
import { NavMenu } from './NavMenu'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <nav className="flex items-center flex-wrap bg-white p-3 md:px-10 lg:px-20">
        <Logo />
        <HamburgerButton handleClick={handleClick} />
        <NavMenu active={active} />
      </nav>
    </>
  )
}

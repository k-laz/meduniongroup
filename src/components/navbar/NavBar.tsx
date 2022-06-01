/*  ./components/Navbar.jsx     */

import { useState } from 'react'
import { HamburgerButton } from './HamburgerButton'
import { Logo } from './Logo'
import { NavMenu } from './NavMenu'
import Phone from './Phone'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <nav className="flex items-center flex-wrap bg-white p-8 md:px-10 lg:px-30 2xl:px-80">
        <Logo />
        <Phone />
        <HamburgerButton handleClick={handleClick} />
        <NavMenu active={active} />
      </nav>
    </>
  )
}

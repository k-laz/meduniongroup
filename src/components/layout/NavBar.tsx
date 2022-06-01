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
        <a
          className="text-xs font-bold uppercase tracking-wide hover:text-pink-400"
          href="tel:+13912200303"
        >
          +7 (391) 220-03-03
        </a>
        <HamburgerButton handleClick={handleClick} />
        <NavMenu active={active} />
      </nav>
    </>
  )
}

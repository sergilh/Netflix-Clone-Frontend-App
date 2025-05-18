import React from 'react'
import NavBarDesktop from './NavbarDesktop/NavbarDesktop'
import NavBarMobile from './NavbarMobile/NavbarMobile'

export default function NavBar() {
    return (
        <nav>
            <div className='hidden mx-auto md:block'>
                <NavBarDesktop/>
            </div>
            <div className='md:hidden'>
                <NavBarMobile/>
            </div>
        </nav>
    )
}
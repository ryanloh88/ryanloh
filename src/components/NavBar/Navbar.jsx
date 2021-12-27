import React, { useState, useEffect } from 'react'
import { MenuItems } from "./MenuItem"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function NavBar() {
    const [closed, change] = useState(true)
    const [navBar,setNavbar]= useState(false)
    const changeBackground = ()=>{
        if (window.scrollY >= window.innerHeight - 60) {
            setNavbar(true)
          } else {
            setNavbar(false)
          }
    }
    
    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })


    return (
        <div className="navDiv">
        <nav className={navBar?"NavbarItems-down":"NavbarItems" }  >
            <div className={navBar?"NavbarLogo-down":"NavbarLogo" } >
                <h1 >
                    Rl
                </h1>
            </div>
            <div className="menu-icon">
                {closed ? <button onClick={() => {
                    change(false)
                }}><MenuIcon /></button> : <button onClick={() => {
                    change(true)
                }}><CloseIcon /></button>}
            </div>

            <div className={closed ?"navbar-right" :"navbar-rightActive"}>
                {MenuItems.map((item, index) => {
                    return <a key={index} className={!navBar?"nav-links" : closed? "nav-links-down" :"nav-links-active-down"} href={item.url} onClick={()=>{
                        change(true)
                    }}>{item.title}</a>
                })}
            </div>
        </nav>
        </div>
    )
}

export default NavBar

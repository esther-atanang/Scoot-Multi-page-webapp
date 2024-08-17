import React, { forwardRef } from 'react'
import Button from './Button'
import { menu, closeMenu } from '../utils'
import { Link } from 'react-router-dom'


const Navbar = forwardRef(({onhandleClick, isOpen}, ref) => {
  return (
    <nav className='nav-bar' ref={ref}>
        <div className='links'>
            <button className='ham-menu' onClick={onhandleClick} ><img src={isOpen ? closeMenu : menu}/></button>
            <Link to={"/"}><h1 className='logo'>Scoot</h1></Link></div>
        <div className='nav-links'>
                <ul>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/location"}>Location</Link></li>
                    <li><Link to={"/careers"}>Careers</Link></li>
                </ul>
            </div>
        <div className='nav-btn'><Button buttonText={"Get Scootin"} /></div>
    </nav>
  )
})

export default Navbar

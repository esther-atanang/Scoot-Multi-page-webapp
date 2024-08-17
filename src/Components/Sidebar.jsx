import React, { forwardRef } from 'react'
import Button from './Button'
import { SIDEBAR } from '../constants'
import { Outlet, Link } from "react-router-dom";
const Sidebar = forwardRef(({openAside},ref) => {

    return (
        <aside ref={ref} className={openAside ? "open_aside" : ""}>
            <div className='links'>
                <ul>
                    
                    {SIDEBAR.links.map((value, i) => <li key={i}><Link to={value}>{value}</Link></li>)}
                </ul>
            </div>
            <div className='btn-container'> <Button buttonText={SIDEBAR.btnText} /> </div>
        </aside>
    )
})

export default Sidebar

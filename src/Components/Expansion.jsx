import React from 'react'
import Button from './Button';
import { leftarr, rightarr, aboutarr } from '../utils';



const Expansion = ({ img,icon, title, desc , buttonText="Learn More"}) => {
    return (
        <div className='expand'>
            <div className='exp-img'><img src={img}/> </div>
            <div className='exp'>
                <div className='exp-title'><h2>{title}</h2></div>
                <div className='exp-desc'><p>{desc}</p></div>
                <div className='exp-btn'> <Button buttonText={buttonText} /> </div>
            </div>
            <img className='exp-icon' src={icon =="left" ? leftarr : rightarr}/>
            {/* <img className='about-icon' src={icon =="left" ? leftarr : aboutarr} alt="arrow" /> */}
        </div>
    )
}

export default Expansion;

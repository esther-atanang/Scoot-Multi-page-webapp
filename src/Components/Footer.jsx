import React from 'react'
import { FOOTER } from '../constants'
import { filled, circle } from '../utils';
const Footer = () => {
    return (
        <>
             <Signup heading={FOOTER.signUpHeading} icons={FOOTER.stores} />
            <footer className='footer-section'>
                 <div><h2 className='logo'>{FOOTER.brandName}</h2></div>
                 <div>
                    <ul className='navLinks'>
                    {FOOTER.navLinks.map(value => <li key={value}><a href="#">{value}</a></li>)} 
                    </ul>  
                </div>
                <div>
                    <ul>
                        {FOOTER.socialMedia.map((value, i) =><li key={i}><img src={value} alt="icon" /></li> )}
                    </ul>
                </div> 
            </footer>
        </>

    )
}


export default Footer;

const Signup = ({heading,icons}) => {
    return (
        <section className='sign-up'>
            <h3 className='heading'>{heading}</h3>
            <div className='sign-up-btn'>
             {icons.map(value=>(
                <button key={value.text2}>
                <img src={value.image} alt='logo' />
                    <p>
                        <span className='small'>{value.text1}</span>
                        <span className='large'>{value.text2}</span>
                    </p>
               </button>
             ))}
            </div>
            <div className='icons'>
                <img src={circle} alt='circle'/>
                <img src={filled} alt='filled-circle'/>
            </div>
        </section>
    )
}

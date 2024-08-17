import React from 'react'
import Button from './Button'
import { HERO_SECTION  } from '../constants'
import { headerArrow, circles} from '../utils'

const Header = () => {
    return (
        <div className="header-wrapper">
            <header className='hero'>

                <div className='hero-title'>
                    <h2>{HERO_SECTION.title}</h2>
                </div>
                <div className='hero-desc'>
                    <p>{HERO_SECTION.description}</p>
                </div>
                <div className='hero-btn'>
                    <Button buttonText={HERO_SECTION.buttonText} />
                </div>
              <div className='hero-icons'>
                 <img className='arr' src={headerArrow}/>
                <img className='circ' src={circles}/> 
              </div>
              
            </header>
        </div>

    )
}

export default Header

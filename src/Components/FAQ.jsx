import React from 'react'
import {close, open} from "../utils"
import { useState } from 'react'

const FAQ = ({question, answer}) => {
    const [Open, setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(value=>!value)
    }
  return (
    <div className='faq'>
        <div>
            <h3 className='question'>{question}</h3>
            <button onClick={handleClick}><img src={Open ? open : close} alt="open/close"/></button>
        </div>
       {Open && <div className='ans'>
            <p className='answer'>{answer}</p>
        </div>}
    </div>
  )
}

export default FAQ

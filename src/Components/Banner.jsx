import React from 'react'
import { circles } from '../utils'

const Banner = ({bannerText}) => {
  return (
    <div className='banner'>
       <h2>{bannerText}</h2>
       <img src={circles} className='icon'/>
    </div>
  )
}

export default Banner

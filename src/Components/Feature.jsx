import React from 'react'


const Feature = ({icon,title,desc}) => {
  return (
    <div className='feature'>
        <div className='feature-icon'><img src={icon} alt='icon'/></div>
        <div className='inner'>
        <div className='feature-title'><h2>{title}</h2></div>
        <div className='feature-desc'><p>{desc}</p></div>
        </div>
        
    </div>
  )
}

export default Feature;

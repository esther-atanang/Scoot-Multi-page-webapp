import React from 'react'

const Value = ({title,image,desc,num}) => {
  return (
    <div className='value'>
        <div className='first'> 
            <img className='value-img' src={image} alt="image" />
            <div className='num'>0{num}</div>
        </div>
        <div className='inner'>
            <h3 className='title'>{title}</h3>
            <p className='desc'>{desc}</p>
        </div>
    </div>
  )
}

export default Value

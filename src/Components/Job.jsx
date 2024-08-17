import React from 'react'
import Button from './Button'

const Job = ({ jobLocation, jobTitle, btnText }) => {
  return (
    <div className='job'>
      <div>
        <h3>{jobTitle}</h3>
        <p>{jobLocation}</p>
      </div>
      <div>
        <Button buttonText={btnText} />
      </div>

    </div>
  )
}

export default Job

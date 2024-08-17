import React from 'react'
import Expansion from '../Components/Expansion'
import { CAREER_DATA } from '../constants'
import Banner from '../Components/Banner'
import Value from '../Components/Value'
import Job from '../Components/Job'
const Career = () => {
  return (
    <div>
        <Banner bannerText={"Careers"}/>
        <section className='expansion'>
        <Expansion  img={CAREER_DATA.heroSection.image} icon={"right"} title={CAREER_DATA.heroSection.title} desc={CAREER_DATA.heroSection.description} buttonText='say Hello'/>
        </section>
       <section className='whyjoin'>
          <h3>{CAREER_DATA.whyJoinUs.title}</h3>
          <div className='values'>
            <div className="inner">
            {CAREER_DATA.whyJoinUs.reasons.map(item=><Value key={item.id}title={item.title} image={item.image} desc={item.description} num={item.id}/>)}
            </div>
           
          </div>
       </section>
       <section className='jobListings'>
          {CAREER_DATA.jobListings.jobs.map(value=><Job key={value.id} jobLocation={value.location} jobTitle={value.title} btnText={value.buttonText}/>)}
       </section>
    </div>
  )
}

export default Career

import React from 'react'
import Expansion from '../Components/Expansion'
import { ABOUT_PAGE } from '../constants'
import Banner from '../Components/Banner'
import Value from '../Components/Value'
import FAQ from '../Components/FAQ'

const About = () => {
    return (
        <div className='about'>
            <Banner bannerText={"about"} />
            <div className="expansion">
                {ABOUT_PAGE.sections.map((value) => <Expansion key={value.title} img={value.image} icon={value.icon} title={value.title} desc={value.description} />)}
            </div>

            <section className='values'>
                <h2>{ABOUT_PAGE.values.title}</h2>
                <div className="inner">
                {ABOUT_PAGE.values.items.map((item, i) => <Value key={item.title} title={item.title} image={item.image} desc={item.description} num={i + 1} />)}
                </div>
               
            </section>

            <section className="faqs">
                <h2 className="title">FAQs</h2>
                <div className='works'>
                    <h3 className='heading'>How it works</h3>
                    <div className='qa'>
                        {ABOUT_PAGE.faq.works.map(value => <FAQ key={value.question} question={value.question} answer={value.answer} />)}

                    </div>
                </div>
                <div className='safe-driving'>
                    <h3 className='heading'>Safe driving</h3>
                    <div className='qa'>
                        {ABOUT_PAGE.faq.driving.map(value => <FAQ key={value.question} question={value.question} answer={value.answer} />)}

                    </div>
                </div>
            </section>

        </div>
    )
}

export default About

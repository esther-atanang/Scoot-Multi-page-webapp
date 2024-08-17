import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Feature from '../Components/Feature'
import Expansion from '../Components/Expansion'
import { EXPANSION, FEATURES } from '../constants'



const Home = () => {
    return (
        <>   
        <Header />
        <section className="features">
            <div className="_inner">
            {FEATURES.map(value=>(<Feature key={value.id} icon={value.icon} title={value.title} desc={value.description}/>))}
            </div>     
        </section>
        <section className="expansion">
        {EXPANSION.map(value=><Expansion key={value.id} icon={value.icon} img={value.image} title={value.title} desc={value.description}/>)}
        </section>
        </>
    )
}

export default Home

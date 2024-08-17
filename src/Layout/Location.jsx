import React from 'react'
import Banner from '../Components/Banner';
import { CITY_NOT_LISTED, LOCATIONS, LOCATIONS_TITLE } from '../constants';
import { desktopmap, map } from '../utils';
import Button from '../Components/Button';

const Location = () => {
  return (
    <div className='locationSection'>
       <Banner bannerText={LOCATIONS_TITLE}/>
        <div className="map">
            <img className='mobile' src={map} alt='map'/>
            <img className='desktop' src={desktopmap} alt='map'/>
        </div>
        <div className='places'>
            {LOCATIONS.map(value=><Place key={value} place={value}/>)}
        </div>
        <div className="cityListing">
            <Listing title={CITY_NOT_LISTED.message} descr={CITY_NOT_LISTED.description} bText={CITY_NOT_LISTED.buttonText}/>
        </div>
    </div>
  )
}

export default Location;

const Place = ({place}) =>{
    return(
        <div className='place'>{place}</div>
    )
}

const Listing = ({title, descr, bText}) =>{
    return(
        <div className='listing'>
            <div className='title'><h3>{title}</h3></div>
            <div className='descr'><p>{descr}</p></div>
            <div className='list-btn'> <Button buttonText={bText}/></div>
        </div>
    )
}

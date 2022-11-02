import React from 'react';
import pin from '../images/pin.png';
import sun from '../images/sunlight.png';
import moon from '../images/moon.png';

export default function Cards(props) {
  return (
    <div className='cards'>
        <img src={props.imageUrl} alt='card-title'/>
        <img src={props.day ? sun : moon} alt='day' className='card-day'/>
        <div className='cards__content'>
            <div className='cards__location'>
                <img src={pin} alt='pin' />
                <p>{props.location}</p>
                <a href='https://goo.gl/maps/1DGM5WrWnATgkSNB8'>View on Google Maps</a>
            </div>
            <h2>{props.title}</h2>
            <p className='cards__date'>{props.startDate} - {props.endDate}</p>
            <p className='description'>{props.description}</p>
        </div>
    </div>
  );
}
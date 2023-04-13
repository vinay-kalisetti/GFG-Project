import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Some of the  unique Features we provide in our website </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
            <CardItem
              src='images/home consult.jpg'
              text='Booking doctors for home consultation'
              label='Home Consultancy'
              path='/Consult'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/delivery.jpg'
              text='Order medicines through online out any delivery cost '
              label='Delivery'
              path='/Prescription'
            />
            <CardItem
              src='images/consult.jpg'
              text='Online consultation with well experienced doctors'
              label='Online Consultation'
              path='/Consult2'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards; 
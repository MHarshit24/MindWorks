import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Tutorials!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='xyz'
              label='xyz'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='xyz'
              label='xyz'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='xyz'
              label='xyz'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='xyz'
              label='xyz'
              path='/courses'
            />
            <CardItem
              src='images/img-8.jpg'
              text='xyz'
              label='xyz'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
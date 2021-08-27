import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira os melhores Destinos </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1336_casa_de_cinco_view_thb.jpg'
              text='Vista da praia de xai-xai'
              label='Aventuras'
              path='/Destinos'
            />
            <CardItem
              src='images/featured.jpg'
              text='Praia de zongoene xai-xai'
              label='Aventuras'
              path='/Destinos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/images.JFIF'
              text='Vista da praia de Chongoene'
              label='Aventuras'
              path='/Destinos'
            />
            <CardItem
              src='images/hqdefault.jpg'
              text='Golfinho praia de xai-xai'
              label='Aventuras'
              path='/Destinos'
            />
            <CardItem
              src='images/9566293.jpg'
              text='Vista da praia do bilene '
              label='Aventuras'
              path='/Registar'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

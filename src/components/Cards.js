import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>     
      <h1>Informação sobre o Coronavírus (Covid-19)</h1>
      <div className='tips'>Saiba como proteger a si mesmo e suas crianças do Coronavírus, confira as passos seguintes</div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='cards/mobile.png'
              text='O uso constante da mascara pode reduzir o indice de infecção contra o covid-19.'
              label='Uso correcto da mascara'
              path='/Destinos'
            />
            <CardItem
              src='cards/acronis-header.jpg'
              text='Distanciamento social são medidas que buscam restringir o convívio social de foma a evitar a propagação de uma determinada doença.'
              label='Distanciamento social'
              path='/Destinos'
            />            
          </ul>          
        </div>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='cards/restore-wordpress-from-backup-1024x512-1.png'
              text='Lave frequentemente as mãos. Utilize água e sabão, ou uma solução à base de álcool.'
              label='Lavar as mãos'
              path='/Destinos'
            />
            <CardItem
              src='cards/acronis-cyber-protection.jpg'
              text='Ao tossir ou espirrar, cubra boca e nariz com um cotovelo flexionado ou use um lenço de papel.'
              label='Cubra boca e nariz'
              path='/Destinos'
            />            
          </ul>          
        </div>
      </div>
    </div>
  );
}

export default Cards;

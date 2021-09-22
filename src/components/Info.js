import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Avoid downtime, data loss and security breaches at a lower cost</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='cards/mobile.png'
              text='Acronis Cyber Protect Cloud – World’s first complete cyber protection solution in the remote work era'
              label='Acronis'
              path='/Destinos'
            />
            <CardItem
              src='cards/acronis-header.jpg'
              text='Going beyond backup: Acronis True Image is now Acronis Cyber Protect Home Office'
              label='Acronis'
              path='/Destinos'
            />            
          </ul>          
        </div>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='cards/restore-wordpress-from-backup-1024x512-1.png'
              text='Going beyond backup: Acronis True Image is now Acronis Cyber Protect Home Office'
              label='Acronis'
              path='/Destinos'
            />
            <CardItem
              src='cards/acronis-cyber-protection.jpg'
              text='Going beyond backup: Acronis True Image is now Acronis Cyber Protect Home Office'
              label='Acronis'
              path='/Destinos'
            />            
          </ul>          
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src = "/images/xai-xai-beach.jpg"/>
      {/* <video src='/videos/Dubai_in_4K_-_City_of_Gold.mp4' autoPlay loop muted /> */}
      <h1>Bem vindo a xai-xai</h1>
      <p>Conheça os melhores destinos turisticos</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Saiba Mais
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Praias <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

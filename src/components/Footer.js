import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Visite a cidade de xai-xai
        </p>
        <p className='footer-subscription-text'>
          Registe-se e receba novidades da cidade do xai-xai
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>subscreva-se</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre xai-xai</h2>
            <Link to='/sign-up'>Regista-se</Link>
            <Link to='/'>Cultura</Link>
            <Link to='/'>Praias</Link>
            <Link to='/'>Destinos</Link>
            <Link to='/'>Hoteis</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Saiba mais</h2>
            <Link to='/'>Contactos</Link>
            <Link to='/'>Email</Link>
            <Link to='/'>Galerias</Link>
            <Link to='/'>Portifolio</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'></Link>
            <Link to='/'>Praias</Link>
            <Link to='/'>Hoteis</Link>
            <Link to='/'>Aventura</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes socias</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            xai-xai
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Desenvolvido por Denilson Mucavele © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

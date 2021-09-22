import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Minimize incidents and improve productivity
        </p>
        <p className='footer-subscription-text'>
        Avoid downtime, data loss and security breaches at a lower cost
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About us</h2>
            <Link to='/sign-up'>lorem inpsum</Link>
            <Link to='/'>lorem inpsum</Link>
            <Link to='/'>lorem inpsum</Link>
            <Link to='/'>lorem inpsum</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Get started</h2>
            <Link to='/'>Contacts</Link>
            <Link to='/'>Email</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Portifolio</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Support</h2>
            <Link to='/'></Link>
            <Link to='/'>Lorem ipsum</Link>
            <Link to='/'>Lorem ipsum</Link>
            <Link to='/'>Lorem ipsum</Link>
            <Link to='/'>Lorem ipsum</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Solutions</h2>
            <Link to='/'>cyber protections</Link>
            <Link to='/'>Acronis Cyber Protect</Link>
            <Link to='/'>Acronis Cyber Disaster Recovery</Link>
            <Link to='/'>Acronis Cyber Cloud Storage </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Mais vida
            <i class='fab fa-twitter' />
            </Link>
          </div>
          <small class='website-rights'>Desenvolvido por Mcmacandle Tecnology © 2021</small>
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

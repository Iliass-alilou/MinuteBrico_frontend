/*import React, { Component } from 'react';
import "./style.css"

export default class Footer extends Component {
  render() {
    return (
      <div> footer </div>
    );
  }
}
*/

import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        MinuteBrico lie les gens qui ont besoin d'aide dans differents domaines de bricolage à des bricoleurs .
        </p>
        <p className='footer-subscription-text'>
        Inscrivez-vous à notre newsletter
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre adresse email'
            />
            <Button buttonStyle='btn--outline'>S'inscrire</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>A propos</h2>
            <Link to='/sign-up'>Comment ça marche</Link>
            <Link to='/'>Avis clients</Link>
            <Link to='/'>Missions</Link>
            <Link to='/'>Sponsors</Link>
            <Link to='/'>Conditions d'utilisation</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsors</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Réseaux Sociaux </h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>MinuteBrico © 2021</small>
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
              class='social-icon-link linkedin'
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

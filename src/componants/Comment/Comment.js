import React from 'react';
import './Comment.css';
import { Button } from '../shared/Button';
import { Link } from 'react-router-dom';

function Comment() {
  return (
    <div className='comment-container'>
      <section className='comment-title'>
        <p className='comment-title-heading'>
        Comment ça Marche?
        </p>
        </section>
      <div class='comment-links'>
        <div className='comment-link-wrapper'>
          <div class='comment-link-items'>
            <h2>Missions</h2>
            <p>C'est facile. Publiez un travail dont vous avez besoin et recevez des offres concurrentielles de bricoleurs en quelques minutes.</p>
          </div>
          <div class='comment-link-items'>
            <h2>Choix</h2>
            <p>Quels que soient vos besoins, il y aura un bricoleur pour le faire: du jardinage, de la peinture, du déménagement, de l'electroménager et de la plomberie (et bien plus encore).</p>
          </div>
          <div class='comment-link-items'>
            <h2>Contact</h2>
            <p>Nous vous mettons en contact avec votre Bricoleur préféré.</p>
          </div>
          <div class='comment-link-items'>
            <h2>Payement</h2>
            <p>Une fois le travail réalisé, vous payez le Bricoleur directement, sans frais supplémentaires.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;

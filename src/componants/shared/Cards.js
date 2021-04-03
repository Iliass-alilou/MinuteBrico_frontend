import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>MinuteBlog</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>      
            <CardItem
              src='/images/img-10.jpg'
              text='Comment peindre un mur ?'
              label='Peinture'
              path='/comment'
            />
            <CardItem
              src='/images/img-11.jpeg'
              text='Comment peindre un mur ?'
              label='Jardinage'
              path='/comment'
            />
            <CardItem
              src='/images/img-12.jpg'
              text='Comment changer un robinet de cuisine ?'
              label='Plomberie'
              path='/comment'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-13.jpg'
              text='Comment et quand tailler les plantes de son jardin?'
              label='Jardinage'
              path='/comment'
            />
            <CardItem
              src='/images/img-14.jpg'
              text='Comment et quand tailler les plantes de son jardin?'
              label='Démenagement'
              path='/Missions'
            />
            <CardItem
              src='/images/img-15.jpeg'
              text='Comment changer un robinet de cuisine ?    '
              label='menuiserie'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

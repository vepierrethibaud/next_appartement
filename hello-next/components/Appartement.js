import React from 'react'
import { object, array, func } from 'prop-types'
import Link from 'next/link'

const Appartement = ({appartement: {id, slug, title, acf}, favorites, toggleFav}) => (

  <article>
    <img className="img_grid" src={acf.image} alt="appartment picture"/>
    <div className="desc">
      <Link as={`/appartement/${slug}`} href={`/post?id=${id}`}>
        <a className="titre">{title.rendered}{favorites.includes(id) && '❤️'}</a>
      </Link>
      <div className="line"></div>

      <p className="price">${acf.price} per night</p>
      <p className="rating">{new Array(parseInt(acf.rating)).fill('⭐️️️️️')}</p>
      
      <button className="favButton" onClick={e => toggleFav(e, id)}>
        {favorites.includes(id) ? 'Remove favorite' : 'Set favorite'}
      </button>
    </div>
  </article>
)

export default Appartement;

Appartement.propTypes = {
  appartement: object.isRequired,
  favorites: array.isRequired,
  toggleFav: func.isRequired
}
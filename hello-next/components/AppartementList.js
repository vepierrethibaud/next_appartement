import React from 'react';
import Appartement from './Appartement';
import { array, func } from 'prop-types';

const AppartementList = ({ appartements, favorites, toggleFav }) => (
  <section>
    {appartements.map(el =>
      <Appartement
        key={el.id}
        appartement={el}
        favorites={favorites}
        toggleFav={toggleFav}
      />
    )}
  </section>
)

export default AppartementList

AppartementList.propTypes = {
  appartements: array.isRequired,
  favorites: array.isRequired,
  toggleFav: func.isRequired
}






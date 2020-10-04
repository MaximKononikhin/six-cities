import React from 'react';

import { CITIES } from '../utils/constants';
import FilterItem from './Filter-item';

const Filters = () => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map(city => <FilterItem key={city} city={city}/>)
          }
        </ul>
      </section>
    </div>
    
  )
}

export default Filters;
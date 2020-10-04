import React from 'react';
import { useSelector } from 'react-redux';

import { HotelType, IAppState } from '../utils/types';
import SmallHotelCard from './Small-card';
import Sorting from './Sorting';

interface IProps {
  hotels: HotelType[]
}

const HotelList = (props: IProps) => {
  const {hotels} = props;

  const activeFilter = useSelector<IAppState, string>(state => state.activeFilter);
  const activeSortingType = useSelector<IAppState, string>(state => state.activeSorting);
  const filteredHotels = hotels.filter(hotel => hotel.city.name === activeFilter).sort((a, b) => {
    switch (activeSortingType) {
      case 'Price: low to high':
        return a.price - b.price;
      
      case 'Price: high to low':
        return b.price - a.price;
        
      default: return b.rating - a.rating
    }
  });

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredHotels.length} places to stay in {activeFilter}</b>
      <Sorting/>
      <div className="cities__places-list places__list tabs__content">
        {filteredHotels.map((elem, index) => <SmallHotelCard card={elem} key={elem.id}/>)}
      </div>
    </section>
  )
}

export default HotelList;
import React from 'react';
import { useSelector } from 'react-redux';
import { HotelType, IAppState } from '../utils/types';
import Filters from './Filters';
import HotelList from './Hotels-list';
import Map from './Map';

const Main = () => {
  const hotels = useSelector<IAppState, HotelType[]>(state => state.hotels);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
          <Filters/>
        <div className="cities">
          <div className="cities__places-container container">
            <HotelList hotels={hotels}/>
            <div className="cities__right-section">
              {
                hotels.length > 0 && <Map hotels={hotels}/>
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

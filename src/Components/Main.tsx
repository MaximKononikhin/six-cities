import React from 'react';
import { useSelector } from 'react-redux';
import { HotelType, IAppState } from '../utils/types';
import Filters from './Filters';
import HotelList from './Hotels-list';
import Map from './Map';
import Loader from './Loader';

const Main = () => {
  const hotels = useSelector<IAppState, HotelType[]>(state => state.hotels);
  const isHotelsLoaded = useSelector<IAppState, boolean>(state => state.isHotelsLoaded);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
          <Filters/>
        <div className="cities">
          {
            isHotelsLoaded?
            <div className="cities__places-container container">
              <HotelList hotels={hotels}/>
              <div className="cities__right-section">
                <Map hotels={hotels}/>
              </div>
            </div> 
            :
            <Loader/>
          }

        </div>
      </main>
    </div>
  );
}

export default Main;

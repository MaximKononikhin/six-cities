import React from 'react'
import { useSelector } from 'react-redux';

import { HotelType, IAppState } from '../utils/types';
import FavoriteCard from './Favorite-card';

export const getCitiesList = (hotels: HotelType[]): string[] => {
  const arr: string[] = [];
  hotels.forEach((hotel) => {
    arr.push(hotel.city.name);
  });
  return Array.from(new Set(arr.flat()));
};

const FavoriteList = () => {

  const favoriteHotels = useSelector<IAppState, HotelType[]>(state => state.favoriteHotels);
  const cities = getCitiesList(favoriteHotels);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => {
          return (
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="/#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {favoriteHotels.filter(hotel => hotel.city.name === city).map(hotel => <FavoriteCard hotel={hotel}/>)}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FavoriteList

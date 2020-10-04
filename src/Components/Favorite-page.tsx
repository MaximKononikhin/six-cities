import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loadFavorites } from '../Store/actions';
import { HotelType, IAppState, ThunkDispatchType } from '../utils/types';
import FavoriteEmpty from './Favorite-empty';
import FavoriteList from './Favorite-list';

const FavoritePage = () => {
  const isAuthNeed = useSelector<IAppState, boolean>(state => state.isAuthNeed);
  const favoriteHotels = useSelector<IAppState, HotelType[]>(state => state.favoriteHotels);
  const dispatch = useDispatch<ThunkDispatchType>();

  useEffect(() => {
    !isAuthNeed && dispatch(loadFavorites());
  }, [dispatch, isAuthNeed]);

  if (isAuthNeed) {
    return <Redirect to='/login' />
  }

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {
          favoriteHotels.length > 0 ? <FavoriteList/> : <FavoriteEmpty/>
        }
      </div>
    </main>

  )
}

export default FavoritePage;

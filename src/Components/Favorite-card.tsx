import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateHotel } from '../Store/actions';
import { HotelType, ThunkDispatchType } from '../utils/types'

interface IProps {
  hotel: HotelType
}

const FavoriteCard = (props: IProps) => {
  const {hotel} = props;

  const dispatch = useDispatch<ThunkDispatchType>();

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/appartmens/${hotel.id}`}>
          <img className="place-card__image" src={hotel.preview_image} width={150} height={110} alt="" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{hotel.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
          className="place-card__bookmark-button place-card__bookmark-button--active button"
          type="button"
          onClick={() => {
                dispatch(updateHotel(hotel));
            }}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${hotel.rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{hotel.title}</a>
        </h2>
        <p className="place-card__type" style={{textTransform: 'capitalize'}}>{hotel.type}</p>
      </div>
    </article>
  )
}

export default FavoriteCard

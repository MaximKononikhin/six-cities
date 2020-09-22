import React from 'react';
import { Link } from 'react-router-dom';
import { HotelType } from '../utils/types';

interface IProps {
  card: HotelType
}

const SmallHotelCard = (props: IProps) => {
  const {card} = props;

  return (
    <article className="cities__place-card place-card">
      {card.is_premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/appartmens/${card.id}`}>
          <img className="place-card__image" src={card.preview_image} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg style={{fill: card.is_favorite? '#4481c': undefined}} className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${card.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/appartmens/${card.id}`}>{card.title}</Link>
        </h2>
        <p className="place-card__type" style={{textTransform: 'capitalize'}}>{card.type}</p>
      </div>
    </article>
  )
};

export default SmallHotelCard;


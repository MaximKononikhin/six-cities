/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { HotelType } from '../utils/types';
import ReviewsContainer from './Reviews-container';
import SmallHotelCard from './Small-card';

interface IProps {
  hotel?: HotelType,
  hotels: HotelType[]
}

const CardDetails = (props: IProps) => {
  const {hotel, hotels} = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hotel]);

  if (!hotel || !hotels) {
    return null;
  }

  return (
    <div className="page">
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {hotel.images.slice(0, 6).map(image => {
                return <React.Fragment key={image}>
                  <div className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                </React.Fragment>
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {hotel.is_premium && 
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {hotel.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${hotel.rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{hotel.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {hotel.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {hotel.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {hotel.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{hotel.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What's inside</h2>
                <ul className="property__inside-list">
                  {hotel.goods.map((property) => <li key={property} className="property__inside-item">{property}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={`/${hotel.host.avatar_url}`} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {hotel.host.name}
                  </span>
                  {hotel.host.is_pro && 
                  <span className="property__user-status">
                    Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {hotel.description}
                  </p> 
                </div>
              </div>
              <ReviewsContainer id={hotel.id}/>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {hotels.filter(elem => elem.id !== hotel.id).slice(0, 3)
                .map(elem => <SmallHotelCard key={elem.id} card={elem}/>)
              }
            </div>
          </section>
        </div>
      </main>

    </div>
  )
}

export default CardDetails;
import React from 'react';

import { IComment } from '../utils/types';

const Review = (props: IComment) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={props.user.avatar_url} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {props.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${props.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {props.comment}
        </p>
        <time className="reviews__time">{
          new Date(props.date).toLocaleDateString(
            'en-gb',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
          )
        }</time>
      </div>
    </li>
  )
}

export default Review;
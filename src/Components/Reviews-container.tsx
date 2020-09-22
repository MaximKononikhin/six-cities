import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewReview from './New-review';
import {loadReviews} from '../Store/actions';
import { IAppState, IComment, ThunkDispatchType } from '../utils/types';
import Review from './Review';

interface IProps {
  id: number;
}

const ReviewsContainer = (props: IProps) => {
  const {id} = props;
  const dispatch = useDispatch<ThunkDispatchType>();
  const comments = useSelector<IAppState, IComment[]>(state => state.comments);
  
  useEffect(() => {
    dispatch(loadReviews(id));
  }, [dispatch, id]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => <Review key={comment.id} {...comment}/>)}
      </ul>
      <NewReview/>
    </section>
  )
}

export default ReviewsContainer;
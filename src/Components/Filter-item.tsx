import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { filterHotelsAction } from '../Store/actions';
import { ActionType } from '../Store/actionTypes';
import { IAppState } from '../utils/types';

interface IProps {
  city: string
}

const FilterItem = (props: IProps) => {
  const {city} = props;

  const activeFilter = useSelector<IAppState, string>(state => state.activeFilter);
  const dispatch = useDispatch<Dispatch<ActionType>>();
  
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${city === activeFilter && `tabs__item--active`}`} href="/#" onClick={(evt) => {
        evt.preventDefault();
        dispatch(filterHotelsAction(city))
      }}>
        <span>{city}</span>
      </a>
    </li>
  )
}

export default FilterItem;
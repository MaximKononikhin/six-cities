import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { sortHotelsAction } from '../Store/actions';
import { ActionType } from '../Store/actionTypes';
import { SORTING_TYPES } from '../utils/constants';
import { IAppState } from '../utils/types';

const Sorting = () => {
  const [isDropdownOpened, switchDropdown] = useState(false);
  const list = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch<Dispatch<ActionType>>();
  const activeSortingType = useSelector<IAppState, string>(state => state.activeSorting);



  useEffect(() => {
    const handleClick = (evt: MouseEvent) => {
      if (!list.current?.contains(evt.target as Node) && isDropdownOpened) {
        switchDropdown(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isDropdownOpened]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by: </span>
      <span className="places__sorting-type" onClick={() => switchDropdown(!isDropdownOpened)}>
        {activeSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isDropdownOpened && 
      <>
        <ul ref={list} className="places__options places__options--opened places__options--custom">
          {SORTING_TYPES.map(type => <li key={`${type}`} className={`places__option ${type === activeSortingType && `places__option--active`}`} value={type} onClick={() => {
            dispatch(sortHotelsAction(type));
            switchDropdown(false);
          }}>{type}</li>)}
        </ul>
      </>
      }
    </form>
  )
}

export default Sorting;
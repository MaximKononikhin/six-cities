import React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../utils/types';

const UserLink = () => {
  const isAuthNeed = useSelector<IAppState, boolean>(state => state.isAuthNeed);
  const isLoginLoaded = useSelector<IAppState, boolean>(state => state.isLoginLoaded);

  if (!isLoginLoaded) {
    return null;
  };


  return (
    <a className="header__nav-link header__nav-link--profile" href="/#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {
        isAuthNeed? <span className="header__login">Sign in</span> : <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
      }
    </a>
  )
}

export default UserLink;
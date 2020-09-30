import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ENTRY_POINT } from '../utils/constants';
import { IAppState, UserType } from '../utils/types';

const UserLink = () => {
  const isAuthNeed = useSelector<IAppState, boolean>(state => state.isAuthNeed);
  const isLoginLoaded = useSelector<IAppState, boolean>(state => state.isLoginLoaded);
  const userInfo = useSelector<IAppState, UserType | undefined>(state => state.userInfo)

  if (!isLoginLoaded) {
    return null;
  };


  return (
    <div className="header__nav-link header__nav-link--profile">
      {
        isAuthNeed? 
        <>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <Link to='/login' className="header__login">Sign in</Link>
        </> 
        :
        <>
          <div style={{backgroundImage: `url(${ENTRY_POINT}${userInfo?.avatar_url})`}} className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userInfo?.email}</span>
        </>
      }
    </div>
  )
}

export default UserLink;
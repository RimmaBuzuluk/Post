import React from 'react';
import styles from '../style/UserInfo.css';

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className="root">
      <img className="avatar" src={avatarUrl || '/noavatar.png'} alt={fullName} />
      <div className="userDetails">
        <span className="userName">{fullName}</span>
        <span className="additional">{additionalText}</span>
      </div>
    </div>
  );
};
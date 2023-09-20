import React from 'react';
import Button from '@mui/material/Button';

import './style/Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from './redux/slices/auth';


export const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to log')) {
      dispatch(logout())
      window.localStorage.removeItem('token')
    }
  }

  // console.log("header",isAuth)
  // console.log("header selectIsAuth",selectIsAuth)

  return (
    <div className="root">
      <div className="inner">
        <Link className="logo" to="/">
          <div>ARCHAKOV BLOG</div>
        </Link>
        <div className="buttons">
          {isAuth ? (
            <>
              <Link to="/add-post">
                <Button variant="contained">Написать статью</Button>
              </Link>
              <Button
                onClick={onClickLogout}
                variant="contained"
                color="error"
              >
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outlined">Войти</Button>
              </Link>
              <Link to="/register">
                <Button variant="contained">Создать аккаунт</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

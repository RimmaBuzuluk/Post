import React from 'react';
import Button from '@mui/material/Button';

import './style/Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from './redux/slices/auth';

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {};

  return (
    <div className="root">
      <div className="inner">
        <Link className="logo" to="/">
          <div>ARCHAKOV BLOG</div>
        </Link>
        <div className="buttons">
          {isAuth ? (
            <>
              <Link to="/posts/create">
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

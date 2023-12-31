import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


import '../style/Registration.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {  fetchRegister, selectIsAuth } from '../redux/slices/auth';
import { Navigate } from 'react-router-dom';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName:'Tetiana Grafova',
      email: 'grafova@gmail.com',
      password: '1234',
    },
    mode: 'onChange',
  })


  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values))

    if (!data.payload) {
      return alert('не вдалось зареєструватись')
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <Paper className="root">
      <Typography className="title" variant="h5">
        Создание аккаунта
      </Typography>
      {/* <div className="avatar">
        <Avatar sx={{ width: 100, height: 100 }}/>
      </div> */}
      <form  onSubmit={handleSubmit(onSubmit)}>
      <TextField 
          className="field"
          label="полное имя "
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register("fullName", { required: "Укажите полное имя" })}
          fullWidth
      />
       <TextField
          className="field"
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register("email", { required: "Укажите почту" })}
          fullWidth
        />
      <TextField 
          className="field"
          label="пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type="password"
          {...register("password", { required: "Укажите пароль" })}
          fullWidth
           />
      
      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
      </form>
    </Paper>
  );
};
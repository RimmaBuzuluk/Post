import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import '../style/Registration.css';

export const Registration = () => {
  return (
    <Paper className="root">
      <Typography className="title" variant="h5">
        Создание аккаунта
      </Typography>
      <div className="avatar">
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className="field" label="Полное имя" fullWidth />
      <TextField className="field" label="E-Mail" fullWidth />
      <TextField className="field" label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
    </Paper>
  );
};
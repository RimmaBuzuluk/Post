import React from 'react';
import { Typography, Paper } from '@mui/material';

const Page = ({title}) => {

  const styles = {
    paper: {
      padding: 20,
      margin: '20px', // Додавання відступу 10px
      height: '600px'
    }
  };

  return (
    <Paper elevation={3} style={styles.paper}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        Основний текст вашої статті тут. Можливо, ви захочете використовувати багато різних компонентів Material-UI для створення контенту статті.
      </Typography>
    </Paper>
  );
};

export default Page;
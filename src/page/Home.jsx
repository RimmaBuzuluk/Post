import React from 'react';
import axios from '../axios';


export const Home = () => {
  React.useEffect(()=>{
    axios.get('/posts')
  },[])

  return (
    <div className='Home'>
      <div className='NewPopular'>
        <button className='New'>нові</button>
        <button className='Popular'>популярні</button>
      </div>
    </div>
  );
};
import React from 'react';
import axios from '../axios';
import {useDispatch} from "react-redux"
import { fetchPosts } from '../redux/slices/post';


export const Home = () => {

  const dispatch=useDispatch()
  React.useEffect(()=>{
    // axios.get('/posts')
    dispatch(fetchPosts())
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
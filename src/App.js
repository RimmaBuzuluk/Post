
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import { Login } from './page/Login';
import { Registration } from './page/Registration';
import { AddPost } from './page/AddPost';
import {FullPost} from './page/FullPost';
import {Header} from './Header'

import Container from "@mui/material/Container";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

function App() {



  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);



  return (
    <>
    
    <Container maxWidth="lg">
    <Header />
    <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/posts/:id' element={<FullPost />} />
           <Route path='/posts/:id/edit' element={<AddPost />} />
           <Route path='/add-post' element={<AddPost />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Registration />} />
         </Routes>
    </Container>
  </>
  );
}

export default App;

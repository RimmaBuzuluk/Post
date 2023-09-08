
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import { FullPost } from './page/FullPost';
import { Login } from './page/Login';
import { Registration } from './page/Registration';
import { AddPost } from './page/AddPost';
import {Header} from './Header'

import Container from "@mui/material/Container";

function App() {
  return (
    <>
    
    <Container maxWidth="lg">
    <Header />
    `<Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/posts/:id' element={<FullPost />} />
           <Route path='/add-post' element={<AddPost />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Registration />} />
         </Routes>
    </Container>
  </>
  );
}

export default App;

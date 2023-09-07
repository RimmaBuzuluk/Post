
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { Home } from './page/Home';
import { FullPost } from './page/FullPost';
import { Login } from './page/Login';
import { Registration } from './page/Registration';
import { AddPost } from './page/AddPost';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='MainInformation'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/posts:id' element={<FullPost />} />
          <Route path='/add-post' element={<AddPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;

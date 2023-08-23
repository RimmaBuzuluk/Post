
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import { Home } from './page/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='MainInformation'>
        <Routes>
          <Route path='/' element={<Home />}/>
        
        {/*<FullPost />*/}
        {/*<AddPost />*/}
        {/*<Login />*/}
        {/*<Registration />*/}
        </Routes>
        </div>
    </div>
  );
}

export default App;


import './App.css';
import React from 'react';


function Header() {
    const isAuth = true;
  return (
    <div className="header">
        <div className='blog_post'>Blog Post</div>
        <div>
        {isAuth ? (
              <>
                <button className='butLogin'>Вийти</button>
                <button className='butRegister'>Написати статтю</button>
              </>
            ) : (
              <>
                <button className='butLogin'>Війти</button>
                <button className='butRegister'>Створити сторінку</button>
              </>
            )}
      
            
            
        </div>
    </div>
  );
}

export default Header;

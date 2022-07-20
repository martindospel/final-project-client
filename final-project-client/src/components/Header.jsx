import React from 'react';
import './Header.css';
import { Button } from 'primereact/button';

function Header() {
  // function to click logo which leads to our page

  // function which log a user in 

  // function which logs a user out

  return (
    <div className='header'>
      <h1 className='header__title'><strong>Placeholder</strong><span>Logo</span></h1>
      <div className='header__buttons'>
        <Button label="Logout" icon="pi pi-sign-out" className="p-button-outlined p-button-sm" />
      </div>
    </div>
  )
}

export default Header
import React from 'react';
import './Header.css';
import { Button } from 'primereact/button';

function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'><strong>teach</strong><span>it</span></h1>
      <div className='header__buttons'>
        <Button label="Logout" icon="pi pi-sign-out" className="p-button-outlined p-button-sm" />
      </div>
    </div>
  )
}

export default Header
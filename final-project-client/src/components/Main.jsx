import React from 'react';
import Timeline from './Timeline';
import Form from './Form';
import './Main.css';

function Main() {
  const student = { uuid: '1', name: 'John Doe' };
  
  return (
    <div className='main' >
      <h1 className='main__student--name'>{student.name}</h1>
      <Timeline />
      <Form />
    </div>
  );
}

export default Main;
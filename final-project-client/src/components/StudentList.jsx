import React from 'react';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import './StudentList.css';

function StudentList() {
  const studentList = [
    { uuid: '1', name: 'John Doe' },
    { uuid: '2', name: 'Sally Molly' },
    { uuid: '3', name: 'James Mc guil' },
    { uuid: '4', name: 'Emma blunch' },
    { uuid: '5', name: 'Ali Wong' },
    { uuid: '6', name: 'Emanuele Rogeri' },
    { uuid: '7', name: 'Ja Rule' },
    { uuid: '8', name: 'Jaa Bruule' },
    { uuid: '9', name: 'Ja Rule II' },
    { uuid: '10', name: 'Helicopter Martina Apachi Henderson James Cluivert Xavier Adamsson' },
    { uuid: '11', name: 'Ja Rule III' },
    { uuid: '12', name: 'Helicopter Martina Apachi IV' },
    { uuid: '13', name: 'Ja Rule IV' },
    { uuid: '14', name: 'Helicopter Martina Apachi XIII' },
    { uuid: '15', name: 'Martin with pronouns' },
    { uuid: '16', name: 'Justin Bieber' }

  ];

  // function that displays student in the middle when clicked, student button stays clicked (different color)

  return (
    ///  ALWAYS REMEMBER THAT MOST OF THE ARRAY FUNCTIONS RECEIVE A FUNCTION ❗️
    <nav className='nav'>
      <div className='nav__options'>
        <Button className='nav__btn p-button-sm' label="Change class" icon="pi pi-sitemap" />
        <Button className='nav__btn p-button-sm' label="Add student" icon="pi pi-plus" />
      </div>
      <div className='student-list'>
        <ListBox
          filter
          filterPlaceholder='Search students...'
          className='student-listbox'
          options={studentList}
          optionLabel={"name"}
          optionValue={"uuid"}
          onChange={() => { }} />
      </div>
    </nav>
  )
}

export default StudentList
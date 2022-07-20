import React from 'react';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
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
      <Dialog header="Add a student" visible={true} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Dialog>
    </nav>
  )
}

export default StudentList
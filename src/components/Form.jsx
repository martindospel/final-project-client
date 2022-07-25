import React from 'react';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import './Form.css'

function Form() {
  // submit function

  return (
    <div className='form'>
      <div className='form__header'>
        <h2>Add student status</h2>
        <Button label="Add to timeline" icon="pi pi-plus" />
      </div>
      <div className='form__parts'>
        <div className='form__part'>
          <ToggleButton
            className='p-button-sm'
            onLabel='Present'
            offLabel='Absent'
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={true}
            onChange={() => { }} />
          <Calendar value={new Date()} id="icon" onChange={() => { }} showIcon />
        </div>
        <div className='form__part'>
          <ToggleButton
            className='p-button-sm'
            onLabel='Good performance'
            offLabel='Bad performance'
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={true}
            onChange={() => { }} />
          <InputTextarea autoResize className='form__input--box' />
        </div>
        <div className='form__part'>
          <ToggleButton
            className='p-button-sm'
            onLabel='Good behavior'
            offLabel='Bad behavior'
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={false}
            onChange={() => { }} />
          <InputTextarea autoResize className='form__input--box' />
        </div>
      </div>
    </div>
  )
}

export default Form



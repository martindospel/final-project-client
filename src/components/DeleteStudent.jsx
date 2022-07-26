
import React from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentAction } from '../slices/studentSlice';
import { Button } from 'primereact/button'
import { useState } from 'react';





function DeleteStudent({ uuid }) {
    const dispatch = useDispatch();
    const currentClass = useSelector((store) => store.class?.currentClass);
    const [visible, setVisible] = useState(false);
    const deleteStudent = () => {
        dispatch(
            deleteStudentAction({ uuid, classUuid: currentClass.uuid })
        )
    }

    return (
        <div className='delete-student'>
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to delete?"
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={deleteStudent} reject={() => { }} />
            <Button onMouseDown={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        </div>
    )

}

export default DeleteStudent;

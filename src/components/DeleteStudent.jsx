
import React from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentAction } from '../slices/studentSlice';
import { Button } from 'primereact/button'




function DeleteStudent({ uuid }) {
    const dispatch = useDispatch();
    const currentClass = useSelector((store) => store.class?.currentClass);

    const deleteStudent = () => {
        confirmDialog({
            message: 'Are you sure you want to delete the selected student?',
            header: 'Delete',
            icon: 'pi pi-exclamation-triangle',
            accept: () => dispatch(
                deleteStudentAction({ uuid, classUuid: currentClass.uuid })
            ),
            reject: () => { }
        });
    }

    return (
        <div className='delete-student'>
            <Button onClick={deleteStudent} icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
            <ConfirmDialog></ConfirmDialog>
        </div>
    )

}

export default DeleteStudent;


import React from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

function DeleteStudent() {
    const deleteStudent = () => {
        confirmDialog({
            message: 'Are you sure you want to delete the selected student?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => acceptFunc(),
            reject: () => rejectFunc()
        });
    }

    return (
        <div className='delete-student'>
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Cancel" />
        </div>

    )

}

export default DeleteStudent




{/* <Button onClick={confirm} icon="pi pi-check" label="Confirm"></Button>
<ConfirmDialog /> <!--required empty dialog tag --> */}

<Dialog
    header="Add a student"
    visible={showAddStudent}
    footer={<Button label="Delete Student" onClick={deleteStudent} />}
    resizable={false}
    onHide={() => setShowAddStudent(false)}
import React from "react";
import { ConfirmDialog } from "primereact/confirmdialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentAction } from "../slices/studentSlice";
import { Button } from "primereact/button";
import { useState } from "react";
import { Menu } from "primereact/menu";
import { useRef } from "react";
import './DeleteStudent.css';

function DeleteStudent({ uuid }) {
    const menu = useRef(null);
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();
    const currentClass = useSelector((store) => store.class?.currentClass);

    const deleteStudent = () => {
        dispatch(deleteStudentAction({ uuid, classUuid: currentClass.uuid }));
    };

    const items = [
        {
            label: "Options",
            items: [
                {
                    label: "Delete Student",
                    icon: "pi pi-trash",
                    command: () => setVisible(true),
                },
            ],
        },
    ];

    return (
        <span className="delete-student">
            <ConfirmDialog
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to delete the student?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={deleteStudent}
                reject={() => { }}
            />
            <Menu model={items} popup ref={menu} id="popup_menu" />
            <Button
                icon="pi pi-ellipsis-h"
                onMouseDown={(event) => menu.current.toggle(event)}
                className="p-button-rounded p-button-sm p-button-text"
                aria-label="Options"
                aria-controls="popup_menu"
                aria-haspopup
                style={{ position: 'absolute' }}
            />
        </span>
    );
}

export default DeleteStudent;

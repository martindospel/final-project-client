import React from 'react';
import './Login.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import addOneTeacherAction from '../slices/teacherSlice'

export default function Login() {
    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: codeResponse => dispatch(addOneTeacherAction)
    })

    return (
        <button onClick={() => { login() }} className='front-page__login'>Login with Google</button>
    )
}

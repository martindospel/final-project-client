import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { loginTeacherAction, signupTeacherAction } from "../slices/teacherSlice";
import { useRef } from "react";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const dispatch = useDispatch();
  const isRejected = useSelector((store) => store.teacher?.loginRejected);

  const [accessToken, setAccessToken] = useState(null);
  const teacherNameInput = useRef(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setAccessToken(codeResponse.access_token);
      dispatch(loginTeacherAction(codeResponse.access_token));
    },
  });

  const signup = () => dispatch(signupTeacherAction({ fullName: teacherNameInput.current.value, accessToken }));

  return (
    <div>
      <button onClick={login} className="front-page__login">
        Login with Google
      </button>
      {isRejected ? (
        <>
          <input ref={teacherNameInput} type="text" placeholder="Write your name" />
          <button onClick={signup}>Signup</button>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

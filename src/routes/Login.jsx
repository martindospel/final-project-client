import React from "react";
import { Button } from 'primereact/button';
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { loginTeacherAction, signupTeacherAction } from "../slices/teacherSlice";
import { useRef } from "react";
import { useState } from "react";
import { InputText } from 'primereact/inputtext';
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
    <div className="entry-page">
      <div className="entry-page__empty-div"></div>
      <h1 className="entry-page__title">Welcome to Track-Mate, mate!</h1>
      {!isRejected ? (
        <>
          <div className="entry-page__inputs">
        <Button onClick={login}>
          <i className="pi pi-google px-2 entry-page__button-spacing"></i>
          <span>Login</span>
        </Button>
      </div>
        </>
      ) : <div></div> }
      {isRejected ? (
        <>
          <InputText className="entry-page__inputs" ref={teacherNameInput} type="text" placeholder="Write your full name..." />
          <Button onClick={signup}>
            <i className="pi pi-google px-2 entry-page__button-spacing"></i>
            <span>SignUp</span>
          </Button>
        </>
      ) : (
        <div></div>
      )}
      <svg id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#002bdc88"></stop><stop offset="95%" stopColor="#32ded488"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,166 0,166 C 80.93779904306217,152.60287081339715 161.87559808612434,139.20574162679426 259,147 C 356.12440191387566,154.79425837320574 469.43540669856463,183.7799043062201 575,194 C 680.5645933014354,204.2200956937799 778.3827751196172,195.67464114832535 872,189 C 965.6172248803828,182.32535885167465 1055.0334928229665,177.52153110047848 1149,174 C 1242.9665071770335,170.47846889952152 1341.4832535885166,168.23923444976077 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#002bdcff"></stop><stop offset="95%" stopColor="#32ded4ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,333 0,333 C 78.42105263157896,324.27272727272725 156.84210526315792,315.54545454545456 256,320 C 355.1578947368421,324.45454545454544 475.0526315789473,342.0909090909091 572,358 C 668.9473684210527,373.9090909090909 742.9473684210527,388.0909090909091 837,381 C 931.0526315789473,373.9090909090909 1045.157894736842,345.54545454545456 1149,334 C 1252.842105263158,322.45454545454544 1346.421052631579,327.72727272727275 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
    </div>
  );
}

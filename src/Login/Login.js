import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
    const { handleGoogleLogin } = useFirebase();
    // console.log(handleGoogleLogin());
    const { googleSignIn, handleUserRegister, handleUserLogin } = useFirebase();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        // handleUserRegister(data.email, data.password);
        handleUserLogin(data.email, data.password);
        console.log(data);
    };
    return (
        <div>
            <div><h1>LOGIN</h1></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input-field"
                        name="email"
                        placeholder="Email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field"
                        name="password"
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    <br />

                    <input
                        className="submit-btn btn btn-danger mt-3"
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
            <div>Or</div>

            <div className="login-box w-25 m-auto">
                <div className="box border border d-flex justify-content-center align-items-center">
                    <button onClick={handleGoogleLogin} className="btn w-75  btn-warning">
                        Google Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;


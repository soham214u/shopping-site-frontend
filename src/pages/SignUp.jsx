import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/SignUp.css";

const SignUp = () => {
  const { handleSubmit, register, formState: {errors}, } = useForm();

  const submitHandler = async({firstName, lastName, emailId, password}) => {
    const res = await axios.post("http://localhost:4000/users", {
      firstName,
      lastName,
      emailId,
      password,
    });

    if (res.status === 200) {
      alert("Sign up successfully");
    } else {
      alert("Error in sign up");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className="signup-form">
        <h2>Sign Up</h2>
        <div className="name">
          <div className="signup-input">
            <label className="label-section">First Name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First name"
              {...register("firstName", {required: "Please enter your first name"})}
            />
            {errors.firstName && (<div>{errors.firstName.message}</div>)}
          </div>
          <div className="signup-input">
            <label className="label-section">Last Name</label>
            <input
              type="text"
              name="last-name"
              id="first-name"
              placeholder="Last name"
              {...register("lastName", {required: "Please enter your last name"})}
            />
            {errors.lastName && (<div>{errors.lastName.message}</div>)}
          </div>
        </div>
        <div className="signup-input">
          <label className="label-section">Email</label>
          <input
            type="text"
            name="email-id"
            id="email-id"
            placeholder="Email"
            {...register("emailId", {required: "Please enter your email"})}
          />
          {errors.emailId && (<div>{errors.emailId.message}</div>)}
        </div>
        <div className="signup-input">
          <label className="label-section">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            {...register("password", {required: "Please enter your password"})}
          />
          {errors.password && (<div>{errors.password.message}</div>)}
        </div>
        <button type="submit">
          SignUp
        </button>
      </form>
    </>
  )
}

export default SignUp;
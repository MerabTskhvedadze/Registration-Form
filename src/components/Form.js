import React, { useState } from "react";

import OtherInfo from "./OtherInfo";
import PersonalIfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";
import ValidForm from "./UI/ValidForm";
import "../App.css";

function Form(props) {
  const [error, setError] = useState();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const movePrevHandler = () => setPage((prevPage) => prevPage - 1);
  const moveNextHandler = () => setPage((prevPage) => prevPage + 1);

  const submitHandler = () => {
    /****** checking if form is valid ******/
    for (const iterator in formData) {
      if (formData[iterator].length === 0){
        setError({
          title: "Invalid input",
          message: "Please dont leave inputs empty",
        });
        console.log(formData[iterator]);
        return;
      }
    }
    if(formData.password.trim().toString() !== formData.confirmPassword.trim().toString()){
      setError({
        title: 'Invalid password',
        message: 'Passwords do not match, Enter same words as password'
      })
      return
    }
    else {
      setError({
        title: 'Form submitted',
        message: 'Thank you for registering'
      })
    }

    /****** cleaning up obj ******/
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      username: "",
      nationality: "",
      other: "",
    });
  };

  const checkPage = () => {
    if (page === FormTitles.length - 1) submitHandler();
    else moveNextHandler();
  };

  /****** changind pages ******/
  const formHandler = () => {
    if (page === 0)
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    if (page === 1)
      return <PersonalIfo formData={formData} setFormData={setFormData} />;
    if (page === 2)
      return <OtherInfo formData={formData} setFormData={setFormData} />;
  };

  const errorHandler = () => setError(null);

  return (
    <div className="form">
      {error && <ValidForm onConfirm={errorHandler} title={error.title} message={error.message}/>}
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{formHandler()}</div>
        <div className="footer">
          <button disabled={page === 0} onClick={movePrevHandler}>
            Prev
          </button>
          <button onClick={checkPage}>
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;

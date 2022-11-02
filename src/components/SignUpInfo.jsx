import React from "react";

function SignUpInfo(props) {
  const emailChangeHandler = (event) => {
    props.setFormData({ ...props.formData, email: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    props.setFormData({ ...props.formData, password: event.target.value });
  };
  const confirmChangeHandler = (event) => {
    props.setFormData({
      ...props.formData,
      confirmPassword: event.target.value,
    });
  };

  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email..."
        value={props.formData.email}
        onChange={emailChangeHandler}
      />
      <input
        type="text"
        placeholder="Password"
        value={props.formData.password}
        onChange={passwordChangeHandler}
      />
      <input
        type="text"
        placeholder="Confirm password"
        value={props.formData.confirmPassword}
        onChange={confirmChangeHandler}
      />
    </div>
  );
}

export default SignUpInfo;

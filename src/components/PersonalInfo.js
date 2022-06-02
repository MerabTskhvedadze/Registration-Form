import React from "react";

function PersonalInfo(props) {
  const fNameChangeHandler = (event) => {
    props.setFormData({
      ...props.formData,
      firstName: event.target.value
    });
  };
  const lNameChangeHandler = (event) => {
    props.setFormData({
      ...props.formData,
      lastName: event.target.value
    });
  };
  const uNameChangeHandler = (event) => {
    props.setFormData({
      ...props.formData,
      username: event.target.value,
    });
  };

  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First name"
        value={props.formData.firstName}
        onChange={fNameChangeHandler}
      />
      <input
        type="text"
        placeholder="Last name"
        value={props.formData.lastName}
        onChange={lNameChangeHandler}
      />
      <input
        type="text"
        placeholder="Username"
        value={props.formData.username}
        onChange={uNameChangeHandler}
      />
    </div>
  );
}

export default PersonalInfo;

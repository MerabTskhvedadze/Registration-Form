import React from "react";

function OtherInfo(props) {
  const nationalityChangeHandler = (event) => {
    props.setFormData({
      ...props.formData,
      nationality: event.target.value
    });
  };
  const otherChangeHandler = (event) => {
    props.setFormData({
      ...props.formData,
      other: event.target.value
    });
  };

  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={props.formData.nationality}
        onChange={nationalityChangeHandler}
      />
      <input
        type="text"
        placeholder="Other..."
        value={props.formData.other}
        onChange={otherChangeHandler}
      />
    </div>
  );
}

export default OtherInfo;

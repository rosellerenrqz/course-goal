import React, { useState } from "react";
import Button from "../../UI/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [inputVal, setInputVal] = useState("");

  const inputValHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputVal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputVal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setInputVal("");
    props.onAddGoal(inputVal);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            backgroundColor: !isValid ? "#E76161" : "transparent",
          }}
          type="text"
          value={inputVal}
          onChange={inputValHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

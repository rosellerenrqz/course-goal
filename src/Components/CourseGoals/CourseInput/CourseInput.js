import React, { useState } from "react";
import Button from "../../UI/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [inputVal, setInputVal] = useState("");

  const inputValHandler = (e) => {
    setInputVal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputVal.trim().length === 0) {
      setInputVal("");
      setIsValid(false);
      return;
    }
    props.onAddGoal(inputVal);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input type="text" value={inputVal} onChange={inputValHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

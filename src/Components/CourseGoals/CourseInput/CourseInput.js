import React, { useState } from "react";
import Button from "../../UI/Button";
import styled from "styled-components";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #ecf8f9;
    border-color: #068da9;
  }

  &.invalid input {
    border-color: red;
    background-color: #e76161;
  }

  &.invalid label {
    color: red;
  }
`;

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
      <FormControl className={`${isValid ? "" : "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" value={inputVal} onChange={inputValHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

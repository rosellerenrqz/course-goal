import React, { useState } from "react";
import CourseInput from "./Components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./Components/CourseGoals/CourseGoalList/CourseGoalList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    // { text: "Sit Down and Code!", id: "1" },
    // { text: "Eat Healthy", id: "2" },
  ]);

  const addGoalHandler = (enteredValue) => {
    setTodos((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: enteredValue,
        id: Math.random().toString(),
      });
      console.log(updatedGoals);
      return updatedGoals;
    });
  };

  const deleteGoalHandler = (goalId) => {
    setTodos((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
        <CourseGoalList items={todos} onDeleteItem={deleteGoalHandler} />
      </section>
      <section id="goals"></section>
    </>
  );
};

export default App;

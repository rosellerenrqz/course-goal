import React, { useState } from "react";
import CourseInput from "./Components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./Components/CourseGoals/CourseGoalList/CourseGoalList";
import "./App.css";

const App = () => {
  const [courseGoal, setCourseGoal] = useState([
    // { text: "Sit Down and Code!", id: "1" },
    // { text: "Eat Healthy", id: "2" },
  ]);

  const addGoalHandler = (enteredValue) => {
    setCourseGoal((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: enteredValue,
        id: Math.random().toString(),
      });
      // console.log(updatedGoals);
      return updatedGoals;
    });
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoal((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  const noGoalsMessage = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  return (
    <>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {courseGoal.length > 0 ? (
          <CourseGoalList items={courseGoal} onDeleteItem={deleteGoalHandler} />
        ) : (
          [noGoalsMessage]
        )}
      </section>
    </>
  );
};

export default App;

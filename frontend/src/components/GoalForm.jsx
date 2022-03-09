import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  createGoal } from "../features/goals/goalSlice";
const options = [
  {
    label: "Choose One",
    value: "",
  },
  {
    label: "Daily",
    value: "Daily",
  },
  {
    label: "Weekly",
    value: "Weekly",
  },
  {
    label: "Monthly",
    value: "Monthly",
  },
  {
    label: "Yearly",
    value: "Yearly",
  },
];

const goalStatusOptions = [
  {
    label: "Choose One",
    value: "",
  },
  {
    label: "Planned",
    value: "Planned",
  },

  {
    label: "In Progress",
    value: "In Progress",
  },
  {
    label: "Completed",
    value: "Completed",
  },
];

const GoalForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    text: "",
    typeOfGoal: "",
    goalStatus: "",
    description: "",
  });
  const { text, typeOfGoal, goalStatus, description } = formData;

  const onChange = (e) => {
    console.log(e.target.name);
    
    setFormData((prevState)=>(
      {
      ...prevState,
      [e.target.name]:e.target.value
     }))
  };

  const dispatch  = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const goalData = {
      text,
      typeOfGoal,
      goalStatus,
      description,
    };
    dispatch(createGoal(goalData));
    navigate("/")
    setFormData({
      text: "",
      typeOfGoal: "",
      goalStatus: "",
      description: "",
    });
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Type Of Goal</label>
          <select
            onChange={onChange}
            id="typeOfGoal"
            name="typeOfGoal"
            value={typeOfGoal}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text">Status</label>
          <select
            onChange={onChange}
            id="goalStatus"
            name="goalStatus"
            value={goalStatus}
          >
            {goalStatusOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text">Description</label>
          <textarea
          cols="20"
          rows="10"
          name="description"
          id="description"
          value={description}
          onChange={onChange}
            
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;

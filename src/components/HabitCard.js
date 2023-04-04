import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HabitCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { deleteHabit } from "../features/habitsSlice";
import { useDispatch, useSelector } from "react-redux";

function HabitCard({ habit }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  useEffect(() => {
    const _count = habit?.weekStatus?.filter(
      (status) => status === "done"
    ).length;

    setCount(_count);
  }, [habit]);

  const handleDelete = () => {
    console.log("Deleted");
    dispatch(deleteHabit(habit.id));
  };
  return (
    <div className="habitcard__container">
      <h1 className="habitcard__title">{habit.title}</h1>
      <h4 className="habitcard__result">Achieved : {count}/7</h4>
      <div className="habitcard__icons">
        <Link to={`/habit/${habit.id}`}>
          <VisibilityIcon />
        </Link>
        <p className="delete__icon" onClick={handleDelete}>
          <DeleteIcon />
        </p>
      </div>
    </div>
  );
}

export default HabitCard;

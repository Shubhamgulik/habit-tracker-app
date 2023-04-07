import React, { useEffect, useState } from "react";
import "./Daycard.css";

// import { updateStatus } from "../features/habitsSlice";
import { useDispatch } from "react-redux";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function Daycard({ habit, day, index, weekStatus, updateStatus }) {
  // console.log("Status :", weekStatus[index]);

  const [_weekStatus, setWeekStatus] = useState(weekStatus);
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (weekStatus) {
      setStatus(weekStatus[index]);
    }
    console.log("Habit : ", habit);
  }, [weekStatus]);

  // Update status
  function changeStatus(_status) {
    console.log("Habit : ", habit);
    console.log("Changing status: ", _status);
    setStatus(_status);
    let newArray = weekStatus.slice();
    newArray.splice(index, 1, _status);
    console.log("New Array: ", newArray);
    updateStatus(habit, newArray);
  }

  function checkStatusAndRender(status) {
    if (status === "done") {
      return (
        <>
          <CheckCircleIcon />
          <CancelOutlinedIcon onClick={() => changeStatus("notDone")} />
          <RemoveCircleOutlineIcon onClick={() => changeStatus("none")} />
        </>
      );
    } else if (status === "notDone") {
      return (
        <>
          <CheckCircleOutlineIcon onClick={() => changeStatus("done")} />
          <CancelIcon />
          <RemoveCircleOutlineIcon onClick={() => changeStatus("none")} />
        </>
      );
    } else {
      return (
        <>
          <CheckCircleOutlineIcon onClick={() => changeStatus("done")} />
          <CancelOutlinedIcon onClick={() => changeStatus("notDone")} />
          <RemoveCircleIcon />
        </>
      );
    }
  }
  return (
    <div className="daycard_container">
      {/* <h1>{weekStatus[Number(index)]}</h1> */}
      {/* {status} */}
      <h3>{day.date}</h3>
      <h4>{day.day}</h4>
      <div className="card__dayStatus">{checkStatusAndRender(status)}</div>
    </div>
  );
}

export default Daycard;

import React, { useEffect, useState } from "react";
import "./Daycard.css";

import { useDispatch } from "react-redux";
// Done status Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Not Done Status Icons
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

// None Status Icons
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

// Single day card with necessary info
function Daycard({ habit, day, index, weekStatus, updateStatus }) {
  const [_weekStatus, setWeekStatus] = useState(weekStatus);
  const [status, setStatus] = useState("");

  // Dispatch for dispatching action
  const dispatch = useDispatch();

  // To handle sideeffects
  useEffect(() => {
    if (weekStatus) {
      setStatus(weekStatus[index]);
    }
  }, [weekStatus]);

  // Update status
  function changeStatus(_status) {
    setStatus(_status);
    let newArray = weekStatus.slice();
    newArray.splice(index, 1, _status);

    updateStatus(habit, newArray);
  }

  // Method will check status and return correct icon
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
      <h3>{day.date}</h3>
      <h4>{day.day}</h4>
      <div className="card__dayStatus">{checkStatusAndRender(status)}</div>
    </div>
  );
}

export default Daycard;

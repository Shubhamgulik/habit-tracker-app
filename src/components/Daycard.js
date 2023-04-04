import React, { useEffect, useState } from "react";
import "./Daycard.css";

import { updateStatus } from "../features/habitsSlice";
import { useDispatch } from "react-redux";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function Daycard({ habit, day, index, weekStatus }) {
  // console.log("Status :", weekStatus[index]);

  const [_weekStatus, setWeekStatus] = useState(weekStatus);
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (weekStatus) {
      setStatus(weekStatus[index]);
    }
  }, [weekStatus]);

  // Update status
  function changeStatus(_status) {
    console.log("Changing status: ", _status);
    let newArray = _weekStatus?.map((i) => i);
    if (newArray) newArray[index] = _status;
    setStatus(_status);
    dispatch(
      updateStatus({
        ...habit,
        weekStatus: _weekStatus,
      })
    );
  }

  // console.log("Status : ", status);
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
      {status}
      <h3>{day.date}</h3>
      <h4>{day.day}</h4>
      <div className="card__dayStatus">{checkStatusAndRender(status)}</div>
    </div>
  );
}

export default Daycard;

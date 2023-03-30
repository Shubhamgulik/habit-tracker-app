import React from "react";
import "./Daycard.css";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function Daycard({ day, index, weekStatus }) {
  console.log("Index ; ", index);
  // console.log("Status :", weekStatus[index]);
  let status;
  if (weekStatus) {
    status = weekStatus[index];
  }
  // console.log("Status : ", status);
  function checkStatusAndRender(status) {
    if (status === "done") {
      return (
        <>
          <CheckCircleIcon />
          <CancelOutlinedIcon />
          <RemoveCircleOutlineIcon />
        </>
      );
    } else if (status === "notDone") {
      return (
        <>
          <CheckCircleOutlineIcon />
          <CancelIcon />
          <RemoveCircleOutlineIcon />
        </>
      );
    } else {
      return (
        <>
          <CheckCircleOutlineIcon />
          <CancelOutlinedIcon />
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

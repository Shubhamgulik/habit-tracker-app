import React from "react";
import "./Daycard.css";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
function Daycard() {
  return (
    <div className="daycard_container">
      <h3>28/01/2023</h3>
      <h4>Monday</h4>
      <div className="card__dayStatus">
        <CheckCircleOutlineIcon />
        <CancelOutlinedIcon />
        <RemoveCircleOutlineIcon />
      </div>
    </div>
  );
}

export default Daycard;

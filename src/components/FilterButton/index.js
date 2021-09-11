import React from "react";
import "./styles.css";
const RFFilterButton = ({ label, active, onFilter }) => {
  return (
    <button
      type="button"
      onClick={() =>
        label === "All Sheikhs" ? onFilter("all") : onFilter(label)
      }
      className={`rfFilterButton ${active ? "active" : ""}`}
    >
      {label}
    </button>
  );
};

export default RFFilterButton;

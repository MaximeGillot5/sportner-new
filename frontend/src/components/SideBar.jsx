import React, { useState } from "react";

const SideBar = ({ onSelect }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <div className="sidebar">
      <div
        className={`sidebar-item ${selectedItem === "Create" && "selected"}`}
        onClick={() => handleItemClick("Create")}
        style={{ cursor: "pointer" }}
      >
        Create
      </div>
      <div
        className={`sidebar-item ${selectedItem === "Events" && "selected"}`}
        onClick={() => handleItemClick("Events")}
        style={{ cursor: "pointer" }}
      >
        Events
      </div>
      <div
        className={`sidebar-item ${selectedItem === "MyEvents" && "selected"}`}
        onClick={() => handleItemClick("MyEvents")}
        style={{ cursor: "pointer" }}
      >
        My Events
      </div>
      <div
        className={`sidebar-item ${
          selectedItem === "MyParticipations" && "selected"
        }`}
        onClick={() => handleItemClick("MyParticipations")}
        style={{ cursor: "pointer" }}
      >
        My Participations
      </div>
    </div>
  );
};

export default SideBar;

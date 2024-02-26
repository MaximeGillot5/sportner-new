import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";

const SideBar = ({ onSelect }) => {
  const [selectedItem, setSelectedItem] = useState("Events"); // Initialiser à "Create"

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  // Appeler handleItemClick avec "Create" lors de l'initialisation
  useEffect(() => {
    handleItemClick("Events");
  }, []);

  return (
    <div className="sidebar">
      <div
        className={`sidebar-item ${selectedItem === "Create" && "selected"}`}
        onClick={() => handleItemClick("Create")}
        style={{ cursor: "pointer" }}
      >
        <FaPlus className="icons" /> Créer
      </div>
      <div
        className={`sidebar-item ${selectedItem === "Events" && "selected"}`}
        onClick={() => handleItemClick("Events")}
        style={{ cursor: "pointer" }}
      >
        <MdEmojiEvents className="icons" /> Sessions
      </div>
      <div
        className={`sidebar-item ${selectedItem === "MyEvents" && "selected"}`}
        onClick={() => handleItemClick("MyEvents")}
        style={{ cursor: "pointer" }}
      >
        <CgProfile className="icons" /> Mes Sessions
      </div>
      <div
        className={`sidebar-item ${
          selectedItem === "MyParticipations" && "selected"
        }`}
        onClick={() => handleItemClick("MyParticipations")}
        style={{ cursor: "pointer" }}
      >
        <FaCheckCircle className="icons" /> Mes Participations
      </div>
    </div>
  );
};

export default SideBar;

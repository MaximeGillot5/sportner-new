import React from "react";
import axios from "axios";

const DeleteEvent = ({ eventId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/events/${eventId}`);
      onDelete(); // Appeler la fonction onDelete pour mettre à jour la liste des événements dans le composant parent
    } catch (error) {
      console.error("Erreur lors de la suppression de l'événement:", error);
    }
  };

  return <button onClick={handleDelete}>Supprimer</button>;
};

export default DeleteEvent;

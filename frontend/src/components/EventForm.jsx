import React, { useState } from "react";
import axios from "axios";

const EventForm = ({ onEventCreated }) => {
  // State pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    event_name: "",
    description: "",
    location: "",
  });

  // Gestionnaire de changement pour mettre à jour le state lorsque les champs sont modifiés
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Gestionnaire de soumission pour envoyer les données du formulaire à l'API Ruby
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/events",
        formData
      );
      console.log("Réponse de l'API Ruby:", response.data);
      // Appel de la fonction onEventCreated avec le nouvel événement créé
      onEventCreated(response.data);
      // Réinitialisation du formulaire après soumission réussie
      setFormData({
        event_name: "",
        description: "",
        location: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi des données à l'API Ruby:", error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom de l'événement:</label>
          <input
            type="text"
            name="event_name"
            value={formData.event_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Créer l'événement</button>
      </form>
    </div>
  );
};

export default EventForm;

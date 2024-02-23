import { useState, useEffect } from "react";
import axios from "axios";

const EditEvent = ({ eventId, onUpdate }) => {
  // State pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    event_name: "",
    description: "",
    location: "",
  });

  // Effet pour mettre à jour les valeurs initiales du formulaire lorsque l'événement change
  useEffect(() => {
    // Récupérer les détails de l'événement depuis l'API
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/events/${eventId}`
        );
        // Mettre à jour l'état local avec les détails de l'événement
        setFormData(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'événement:",
          error
        );
      }
    };

    // Appeler la fonction pour récupérer les détails de l'événement
    fetchEventDetails();
  }, [eventId]); // Effect ne s'exécute que lorsque l'ID de l'événement change

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
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `"Bearer ${token}"`,
      };
      // Envoi des données du formulaire à l'API Ruby pour mettre à jour l'événement
      const response = await axios.put(
        `http://localhost:3000/api/v1/events/${eventId}`,
        formData,
        { headers: headers }
      );
      console.log("Réponse de l'API Ruby:", response.data);
      // Appeler la fonction onUpdate pour mettre à jour la liste des événements dans le composant parent
      onUpdate();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'événement:", error);
    }
  };

  return (
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
      <button type="submit">Modifier l'événement</button>
    </form>
  );
};

export default EditEvent;

import { useState, useEffect } from "react";
import axios from "axios";

const UserEvents = ({ token }) => {
  const [userEvents, setUserEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        // Appel Axios pour récupérer les événements avec les en-têtes d'Authorization
        const response = await axios.get(
          "http://localhost:3000/api/v1/events/events_user",
          {}
        );
        // Mettre à jour les événements dans le composant parent
        props.setEvents(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la mise à jour de la liste des événements:",
          error
        );
      }
    };

    fetchUserEvents();
  }, [token]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <h2>Mes Événements</h2>
      {userEvents.length === 0 ? (
        <p>Vous n'avez aucun événement.</p>
      ) : (
        <ul>
          {userEvents.map((event) => (
            <li key={event.id}>
              <h3>{event.name}</h3>
              <p>Description: {event.description}</p>
              <p>Emplacement: {event.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserEvents;

import { useState } from "react";
import DeleteEvent from "./DeleteEvent";
import axios from "axios";
import { Link } from "react-router-dom";
import EditEvent from "./EditEvent";

const EventsList = (props) => {
  const handleUpdate = async () => {
    try {
      // Mettre à jour la liste des événements en récupérant les données actualisées de l'API
      const response = await axios.get("http://localhost:3000/api/v1/events");
      props.setEvents(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour de la liste des événements:",
        error
      );
    }
  };

  return (
    <div>
      <h1>Events de l'API</h1>
      {props.events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.event_name}</h2>
            <p>{event.description}</p>
            <p>{event.location}</p>
            <DeleteEvent
              eventId={event.id}
              onDelete={() => handleUpdate(event.id)}
            />
            <Link to={`/edit-event/${event.id}`}>
              <button>Editer</button>
            </Link>
            <EditEvent
              eventId={event.id}
              onUpdate={() => handleUpdate(event.id)} // Utilisez handleUpdate pour mettre à jour la liste des événements après édition
            />
          </div>
        );
      })}
    </div>
  );
};

export default EventsList;

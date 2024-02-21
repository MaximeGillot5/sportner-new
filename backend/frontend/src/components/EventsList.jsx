import { useState } from "react";
import DeleteEvent from "./DeleteEvent";
import axios from "axios";

const EventsList = (props) => {
  const handleDelete = async (eventId) => {
    try {
      // Supprimer l'événement de la liste des événements dans le composant parent
      const updatedEvents = props.events.filter(
        (event) => event.id !== eventId
      );
      // Mettre à jour la liste des événements dans le composant parent avec la nouvelle liste filtrée
      props.setEvents(updatedEvents);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'événement:", error);
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
              onDelete={() => handleDelete(event.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EventsList;

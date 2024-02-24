import { useState } from "react";
import DeleteEvent from "./DeleteEvent";
import axios from "axios";
import { Link } from "react-router-dom";
import EditEvent from "./EditEvent";

const EventsList = (props) => {
  const handleUpdate = async () => {
    try {
      // Appel Axios pour récupérer les événements avec les en-têtes d'Authorization
      const response = await axios.get(
        "http://localhost:3000/api/v1/events",
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

  return (
    <div className="events_cards_div">
      <div className="events_left"></div>
      <h1>Sessions disponibles</h1>
      {props.events.map((event) => {
        return (
          <div key={event.id} className="events_card">
            <h2>{event.event_name}</h2>
            <p>{event.description}</p>
            <p>@ {event.location}</p>
            <div className="btn_delete">
              <DeleteEvent
                eventId={event.id}
                onDelete={() => handleUpdate(event.id)}
              />
            </div>
            {/* <Link to={`/edit-event/${event.id}`}>
              <button>Editer</button>
            </Link>
            <EditEvent
              eventId={event.id}
              onUpdate={() => handleUpdate(event.id)} // Utilisez handleUpdate pour mettre à jour la liste des événements après édition
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default EventsList;

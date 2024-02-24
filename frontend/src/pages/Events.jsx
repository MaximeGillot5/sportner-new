import axios from "axios";
import EventsList from "../components/EventsList";
import { useEffect, useState } from "react";
import EventForm from "../components/EventForm";
import SideBar from "../components/SideBar";

const API_URL = "http://localhost:3000/api/v1/events";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

const Events = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Appel Axios pour récupérer les événements avec les en-têtes d'Authorization
      const response = await axios.get(
        "http://localhost:3000/api/v1/events",
        {}
      );
      // Mettre à jour les événements dans le composant avec les données récupérées de la réponse
      setEvents(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des événements :", error);
    }
  };

  const handleEventCreated = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    // Faire quelque chose avec l'élément sélectionné, par exemple, naviguer vers une autre page
  };

  return (
    <div className="events_container">
      <div className="left_form">
        <SideBar onSelect={handleSelectItem} />
      </div>
      <div className="events_list">
        {selectedItem === "Events" && (
          <EventsList events={events} setEvents={setEvents} />
        )}
        {selectedItem === "Create" && (
          <EventForm
            onEventCreated={handleEventCreated}
            events={events}
            setEvents={setEvents}
          />
        )}
      </div>
    </div>
  );
};

export default Events;

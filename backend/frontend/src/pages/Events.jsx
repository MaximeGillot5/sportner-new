import axios from "axios";
import EventsList from "../components/EventsList";
import { useEffect, useState } from "react";
import EventForm from "../components/EventForm";

const API_URL = "http://localhost:3000/api/v1/events";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getAPIData();
      setEvents(data);
    } catch (error) {
      console.error("Erreur lors du chargement des événements :", error);
    }
  };

  const handleEventCreated = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div>
      <h1>Hello</h1>
      <EventsList events={events} setEvents={setEvents} />
      <EventForm onEventCreated={handleEventCreated} />
    </div>
  );
};

export default Events;

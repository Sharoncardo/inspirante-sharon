import { useState, useEffect } from "react";
import ViewRegistrations from "./ViewRegistrations";

function AdminDashboard() {
  const [events, setEvents] = useState([]);

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [capacity, setCapacity] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCreateEvent = async () => {
    if (!eventName || !date || !venue || !capacity) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: eventName,
            date,
            venue,
            capacity,
          }),
        }
      );

      const data = await response.json();

      alert("Event Created Successfully");

      setEvents([...events, data]);

      setEventName("");
      setDate("");
      setVenue("");
      setCapacity("");
    } catch (error) {
      console.log(error);
      alert("Failed to create event");
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Create Event</h2>

      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Capacity"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      />

      <br /><br />

      <button onClick={handleCreateEvent}>
        Create Event
      </button>

      <hr />

      <h2>All Events</h2>

      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.name}</h3>

          <p>
            Date: {new Date(event.date).toLocaleDateString()}
          </p>

          <p>Venue: {event.venue}</p>

          <p>Capacity: {event.capacity}</p>

          <p>Registrations: {event.registrations || 0}</p>

          <p
            style={{
              color:
                (((event.registrations || 0) / event.capacity) * 100) < 50
                  ? "green"
                  : (((event.registrations || 0) / event.capacity) * 100) < 80
                  ? "orange"
                  : "red",
              fontWeight: "bold",
            }}
          >
            Filled:{" "}
            {Math.round(
              ((event.registrations || 0) / event.capacity) * 100
            )}
            %
          </p>

          <hr />
        </div>
      ))}

      <ViewRegistrations />
    </div>
  );
}

export default AdminDashboard;
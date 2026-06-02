import { useState, useEffect } from "react";
import MyRegistrations from "./MyRegistrations";

function StudentDashboard({ username }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, []);




  const registerEvent = async (eventName) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentName: username,
            eventName,
          }),
        }
      );

          const data = await response.json();

      if (response.ok) {
        alert("Registered successfully");
      } else {
        alert(data.message);
      }







    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};


  return (
    <div>
      <h1>Student Dashboard</h1>

      <button onClick={logout}>
        Logout
      </button>

<p>Logged in as: {username}</p>


      <h2>Upcoming Events</h2>

      {sortedEvents.map((event) => (
        
        <div
          key={event._id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{event.name}</h3>

          <p>
            Date: {new Date(event.date).toLocaleDateString()}
          </p>

          <p>Venue: {event.venue}</p>

          <p>Capacity: {event.capacity}</p>
                {console.log(event)}

                    {event.registrations >= event.capacity ? (
            <button disabled>
                Full
            </button>
            ) : (
            <button
                onClick={() => registerEvent(event.name)}
            >
                Register
            </button>
            )}
        </div>
      ))}

      <MyRegistrations username ={username} />
    </div>
  );
}

export default StudentDashboard;
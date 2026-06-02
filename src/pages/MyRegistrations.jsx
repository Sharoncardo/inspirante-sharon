import { useState, useEffect } from "react";

function MyRegistrations({username}) {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
  fetch(`http://localhost:3000/api/register/${username}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setRegistrations(data);
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <div>
      <h2>My Registrations</h2>

      {registrations.length === 0 ? (
        <p>No registrations found</p>
      ) : (
        registrations.map((registration) => (
          <div key={registration._id}>
            <h3>{registration.eventName}</h3>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default MyRegistrations;
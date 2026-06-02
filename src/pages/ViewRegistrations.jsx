import { useEffect, useState } from "react";
function ViewRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/register")
      .then((res) => res.json())
      .then((data) => {
        console.log("data recieved:",data);
        setRegistrations(data);
      })
      .catch((err) => {
        console.log("error:",err);
  });
  }, []);

  return (
    <div>
      <h2>Registered Students</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Event Name</th>
          </tr>
        </thead>

        <tbody>
          {registrations.map((reg, index) => (
            <tr key={index}>
              <td>{reg.studentName}</td>
              <td>{reg.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRegistrations;
import { useState } from "react";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

 const handleLogin = () => {
  const students = [
    "asha.rao",
    "ravi.shetty",
    "meera.nair",
    "kiran.bhat",
    "divya.kamath",
    "suresh.pai",
    "ananya.hegde",
    "rohan.shenoy",
    "nisha.prabhu",
    "tejas.mallya",
    "priya.bangera",
  ];

  if (username === "admin" && password === "inspirante2026") {
    setRole("admin");
  } else if (
    students.includes(username) &&
    password === "student123"
  ) {
    setRole("student");
  } else {
    alert("Invalid Credentials");
  }
};

  if (role === "admin") {
    return <AdminDashboard />;
  }

  if (role === "student") {
    return <StudentDashboard 
    username={username}/>;
  }

  return (
    <div>
      <h1>College Event Registration Portal</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import FormContainer from "./Components/Form";
import List from "./Components/List";
import "./App.css";
import "./css/index.css";

function App() {
  const [user, setUser] = useState([]);
  console.log("user from app", user);
  return (
    <div className="App">
      <FormContainer user={user} setUser={setUser} />
      <List user={user} />
    </div>
  );
}

export default App;

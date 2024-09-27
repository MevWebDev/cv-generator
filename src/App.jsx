import { useState } from "react";

import "./App.css";
import PersonalDetails from "./PersonalDetails";
import CV from "./CV";
import Section from "./Section";

function App() {
  const [personal, setPersonal] = useState({
    fullName: "Your Name",
    email: "yourmail@example.com",
    phone: "+1 123456789",
    address: "The wolf street",
  });

  function handleType(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setPersonal((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <>
      <div className="container">
        <PersonalDetails handleType={handleType}></PersonalDetails>
        <Section>Education</Section>
        <Section>Experience</Section>
      </div>
      <CV personal={personal}></CV>
    </>
  );
}

export default App;

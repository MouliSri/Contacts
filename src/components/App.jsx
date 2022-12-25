import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

export default function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name={Contacts[0].name}
        img={Contacts[0].img}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].img}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].img}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

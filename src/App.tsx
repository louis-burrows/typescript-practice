// import React, { useEffect, useState } from 'react';
import './App.css';
import PersonDisplay from "./PersonDisplay"
import type { Person } from "./types"

const person: Person = {
  firstName: "James",
  lastName: "Harris",
  age: 74,
  likesApples: [true, "gala"]
};


const App: React.FC = () => {


  return (
    <>
      <PersonDisplay person={person} />
    </>
  );
}

export default App;

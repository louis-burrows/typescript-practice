// import React, { useEffect, useState } from 'react';
import './App.css';
import PersonDisplay from "./PersonDisplay"

const person: {
  firstName: string;
  lastName: string;
  age: number;
  likesApples: [boolean, string];
} = {
  firstName: "James",
  lastName: "Harris",
  age: 74,
  likesApples: [true, "gala"]
};


const App: React.FC = () => {


  return (
    <>
      <PersonDisplay person={person}/>
    </>
  );
}

export default App;

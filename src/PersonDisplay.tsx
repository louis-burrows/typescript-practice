import React, { useEffect, useState } from 'react';
// import Person from "../"
import './App.css';

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  likesApples: [boolean, string];
}

interface Props {
  person: Person;
}




const PersonDisplay: React.FC<Props> = ({person}) => {

  const ageForJab: number = 70;
  const name = person.firstName


  return (
    <>
      <p>First name: {person.firstName}</p>
      <p>Last name: {person.lastName}</p>
      <p>Age: {person.age}</p>
      <p>Favourite apple: {person.likesApples}</p>
    </>
  );
}

export default PersonDisplay;
import React, { useEffect, useState } from 'react';
import './App.css';
import type { Person } from "./types"


interface Props {
  person: Person;
}


const PersonDisplay: React.FC<Props> = ({ person }): JSX.Element => {

  const ageForJab: number = 70;
  const { firstName, lastName, age } = person

  return (
    <>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Favourite apple: {person.likesApples}</p>
    </>
  );
}

export default PersonDisplay;
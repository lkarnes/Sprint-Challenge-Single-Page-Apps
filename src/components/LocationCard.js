import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Location = styled.div `
width: 45%;
border: 1px solid black;
margin: 5px;
padding: 10px;
`
export default function LocationCard({ name, type, dimension, residents }) {
  var counter = 0;
residents.map(resident=>{
  counter++
})
  return (
    <Location>
      <h1>{name}</h1>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>Residents: {counter}</p>
      
    </Location>
  );
}

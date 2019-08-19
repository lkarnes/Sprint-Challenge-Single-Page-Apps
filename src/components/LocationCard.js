import React from "react";
import styled from 'styled-components';

const Location = styled.div `
width: 45%;
border: 1px solid black;
margin: 5px;
padding: 10px;
`
export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Location>
      <p>{name}</p>
      <p>{type}</p>
      <p>{dimension}</p>
      
    </Location>
  );
}

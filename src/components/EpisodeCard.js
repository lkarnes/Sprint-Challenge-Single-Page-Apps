import React from "react";
import styled from 'styled-components';

const Episode = styled.div `
width: 45%;
border: 1px solid black;
border-radius: 5px;
margin: 5px;
padding: 10px;
`
export default function CharacterCard({name, air, episode}) {
  return (
    <Episode>
        <p>{name}</p>
        <p>{air}</p>
        <p>{episode}</p>
    </Episode>
  )
}

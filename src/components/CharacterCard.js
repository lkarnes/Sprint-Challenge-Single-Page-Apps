import React from "react";
import styled from 'styled-components';

const Character = styled.div `
border: 1px solid black;
border-radius: 5px;
margin: 5px;
padding: 10px;
`
export default function CharacterCard({name,status,species,type,img}) {
  return (
    <Character>
      <img src={img}/>
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
      <p>{type}</p>
      
    </Character>
  )
}

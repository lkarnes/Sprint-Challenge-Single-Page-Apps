import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

const Episode = styled.div `
width: 45%;
border: 1px solid black;
border-radius: 5px;
margin: 5px;
padding: 10px;
`
export default function CharacterCard({name, air, episode, char}) {
    const [characters, setCharacters]= useState([])

    const chars = () =>{{characters.map(item=>{
            return <p>{item}</p>
        })}
    }
    useEffect(()=>{
        char.map(item=>{
            axios.get(item)
            .then((data=>{
    setCharacters(data.data.name)
    
            }))
        })
    },[]);
    console.log(characters)
  return (
    <Episode>
        <p>{name}</p>
        <p>{air}</p>
        <p>{episode}</p>
        {chars}
        
        
    </Episode>
  )
}

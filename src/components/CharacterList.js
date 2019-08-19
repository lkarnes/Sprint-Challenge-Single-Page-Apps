import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [characters, setCharecters] = useState([]);
  useEffect(() => {
    Axios.get('https://rick-api.herokuapp.com/api/character/')
    .then((data)=>
    setCharecters(data.data.results)
    )
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(characters, 'chars')

  return (
    <section className="character-list grid-view">
      {characters.map(char =>{
        return <CharacterCard name={char.name} status={char.status} species={char.species} type={char.type} img={char.image}/>
      }
        )}
    </section>
  );
}

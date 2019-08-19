import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    Axios.get('https://rick-api.herokuapp.com/api/episode/')
    .then((data)=>
    setEpisodes(data.data.results)
    )
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(episodes, 'eps')

  return (
    <section className="character-list grid-view">
      {episodes.map(eps =>{
        return <EpisodeCard name={eps.name} air={eps.air_date} episode={eps.episode}/>
      }
        )}
    </section>
  );
}
import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard.js'
import axios from 'axios';
import styled from 'styled-components';
const LocationBox = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
export default function LocationsList() {
    const [locations, setLocations] = useState([])
    useEffect(()=>{
        const getLocation=()=>{
            axios.get(`https://rick-api.herokuapp.com/api/location/`)
            .then((item)=>{
                setLocations(item.data.results)
            })
            .catch((err)=>{
                console.log(err, 'error')
            })
        }
    getLocation();
    },[])
    return(
        <LocationBox>
            {locations.map(item=>{
               return <LocationCard name={item.name} type={item.type} dimension={item.dimension} residents={item.residents} />
            })}
    
        </LocationBox>
    )
}

import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

// TODO: Add missing tabs below
const Tabs = styled.div`
border: 1px solid grey
border-radius: 5px;
padding: 0px 10px;
margin: 3px;
width: 100px;
text-align: center
`
export default function TabNav() {
return (
    <Menu>
        <Tabs><NavLink to='/'>Home</NavLink></Tabs>
        <Tabs><NavLink to='/characters/' >Charecters</NavLink></Tabs>
        <Tabs><NavLink to='/locations/'>Locations</NavLink></Tabs>
        <Tabs><NavLink to='/episodes/'>Episodes</NavLink></Tabs>
    </Menu>
)
};

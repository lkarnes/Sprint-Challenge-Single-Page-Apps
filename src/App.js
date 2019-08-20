import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import LocationList from './components/LocationsList';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';

// import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* 
      <AppRouter /> */}
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/locations/' component={LocationList}/>
      <Route path='/characters/' component={CharacterList}/>
      <Route path='/episodes/' component={EpisodeList}/>
    </main>
  );
}

import React, { useState } from 'react';
import styled from "styled-components";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import DevPortfolio from './Components/DevPortfolio';
import PhotoPortfolio from './Components/PhotoPortfolio';

import ParticlesJS from "./Components/ParticlesJS";


import './App.css';

function App() {

  const [NavAppear, setNavAppear] = useState({ topDrawerOpen: false })

  let drawerToggleClickHandler = () => {
    setNavAppear((prevState) => {
      return { topDrawerOpen: !prevState.topDrawerOpen }
    });
  };

  let closeBackDropClickHandler = () => {
    setNavAppear({ topDrawerOpen: false })
  }


  return (
    <BrowserRouter>
      <SiteWrapper>
        <ParticlesJS />

        <SubWrapper>
          <NavBar NavAppear={NavAppear} closeBackDropClickHandler={closeBackDropClickHandler} />
          <Switch>
            <Route path='/about' render={(props) => <About drawerToggleClickHandler={drawerToggleClickHandler} />} />
            <Route path='/devportfolio' render={(props) => <DevPortfolio drawerToggleClickHandler={drawerToggleClickHandler} />} />
            <Route path='/photoportfolio' render={(props) => <PhotoPortfolio drawerToggleClickHandler={drawerToggleClickHandler} />} />
            <Route path='/' render={(props) => <Home drawerToggleClickHandler={drawerToggleClickHandler} />} />
          </Switch>

        </SubWrapper>
      </SiteWrapper>

    </BrowserRouter>

  );
}

export default App;



const SiteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%
  height: 100%
`
const SubWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%
  height: 100%
`
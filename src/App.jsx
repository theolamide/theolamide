import React, { useEffect } from 'react';
import styled from "styled-components";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import About from './Components/About';
import DevPortfolio from './Components/DevPortfolio';
import PhotoPortfolio from './Components/PhotoPortfolio';

import ParticlesJS from "./Components/ParticlesJS";
import { applyPageMeta } from './seo';


import './App.css';

// The router is supplied by the caller: BrowserRouter in the browser (index.jsx),
// StaticRouter when prerendering (entry-server.jsx).
function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    applyPageMeta(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
      <SiteWrapper>
        <ParticlesJS />

        <SubWrapper>
          <Switch>
            {/* The About page is the home page; /about is kept for old links. */}
            <Redirect from='/about' to='/' />
            <Route path='/devportfolio' component={DevPortfolio} />
            <Route path='/photoportfolio' component={PhotoPortfolio} />
            <Route path='/' component={About} />
          </Switch>

        </SubWrapper>
      </SiteWrapper>
  );
}

export default App;



const SiteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const SubWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
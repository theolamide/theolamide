import React from 'react';
import styled from 'styled-components';
import Footer from './footer';

import SiteHeader from './SiteHeader';
import PhotoGallery from './PhotoGallery';
import { PhotoRoll } from './PortfolioData.js';


const PhotoPortfolio = () => {

    return (
        <RootWrapper>
            <SiteHeader />
            <Main>
                <Title>Photography</Title>
                <PhotoGallery photos={PhotoRoll} label="Portraits and product shoots" />
            </Main>
            <Footer />
        </RootWrapper>
    )
}

export default PhotoPortfolio;

const RootWrapper = styled.div`
    min-height: 100%;
    padding-bottom: 2rem;
`
const Main = styled.main`
    width: 90%;
    max-width: 60rem;
    margin: 1.5rem auto 0;
    /* Opaque, so the floating particles never sit behind the photos or captions. */
    background: #E0FCDE;

    @media (max-width: 414px) {
        width: calc(100% - 2rem);
        margin-top: 1rem;
    }
`
const Title = styled.h1`
    margin: 0 0 1rem;
    text-align: left;
    font-size: 2.25rem;
    line-height: 1.1;
    color: #2F5F1C;

    @media (max-width: 414px) {
        font-size: 1.85rem;
        margin-bottom: 0.75rem;
    }
`

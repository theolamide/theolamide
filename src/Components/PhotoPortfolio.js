import React from 'react';
import styled from 'styled-components';
import Footer from './footer';

import LogoandHam from './LogoAndHam';
import PhotoSilder from './PhotoSlider'



const PhotoPortfolio = (props) => {

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />
            <MainContent>
                <PhotoSilder />
            </MainContent>
            <Footer />
        </RootWrapper>
    )
}

export default PhotoPortfolio;

const RootWrapper = styled.div`
    height: 96%;
`
const MainContent = styled.div`
    margin: auto;
    margin-top: 1rem;
    width: 95%;
    height: 75.5vh;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
    overflow: scroll;
        &::-webkit-scrollbar
            {
                width: 6px;
                height: 0px;
                background-color: #BCE5B9;
            } 
        &::-webkit-scrollbar-thumb
            {
                background-color: #134818;
            }

        @media (max-width: 768px) {
            width: 95%;
            height: 87%;
        }

        @media (max-width: 414px) {
            flex-direction: column;
            height: 75%;
            // margin-bottom: 1.5rem;
        }
`

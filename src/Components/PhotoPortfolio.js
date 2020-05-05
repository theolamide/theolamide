import React from 'react';
import styled from 'styled-components';

import LogoandHam from './LogoAndHam';
import PhotoSilder from './PhotoSlider'



const PhotoPortfolio = (props) => {

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />
            <MainContent>
                <PhotoSilder />
            </MainContent>
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
    height: 89%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
    overflow: scroll;
        &::-webkit-scrollbar
            {
                width: 6px;
                height: 0px;
                background-color: #E0FCDE;
            } 
        &::-webkit-scrollbar-thumb
            {
                background-color: #134818;
            }

    @media (max-width: 414px) {
        flex-direction: column;
        height: 85%;
    }
`

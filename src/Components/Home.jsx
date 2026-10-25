import React from 'react';
import LogoandHam from './LogoAndHam';
import Footer from './footer';
import styled from 'styled-components';
import Logo from '../Images/Logo.png';





const Home = (props) => {

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />

            <MainContent>

                <TitlesWrapper>
                    <NameTitle>theỌlámidé</NameTitle>
                    <Titles>Full-Stack Developer & Photographer</Titles>
                </TitlesWrapper>

                <MainContentLogo src={Logo} />

            </MainContent>
            <Footer />
        </RootWrapper>

    )
}

export default Home;

const RootWrapper = styled.div`
    width: 100%;
    height: 100%;
    // border: 1px solid red;    
`
const MainContent = styled.div`
    margin: auto;
    margin-top: 4rem;
    width: 90%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    // border: 1px solid blue;

    @media (max-width: 1400px) {
        height: 55%;
        // border: 1px solid blue;
    }

    @media (max-width: 1150px) {
        flex-direction: column-reverse;
    }
    
    @media (max-width: 768px) {
            margin-top: 2rem;
            flex-direction: column-reverse;
            height: 77%;
        }

    @media (max-width: 414px) {
        margin-top: 1rem;
        justify-content: center;
        height: 72%;
        flex-direction: column-reverse;
        margin-bottom: 1.5rem;
    }
`
const TitlesWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid black;
    //border-radius: 0.75rem;
    //border-right: 0.25rem solid #67973E;

    @media (max-width: 1150px) {
        margin: 0 auto;
    }
    
    @media (max-width: 768px) {
            width: 100%;
            margin: 0 auto;
        }
    
    @media (max-width: 414px) {
            margin: 0 auto;
            margin-bottom: 0;
            border: none;
            // border: 1px solid black;
        }
`
const NameTitle = styled.h1`
    font-size: 9rem;
    color: #67973E;
    //background: #E0FCDE;
    // border: 1px solid black;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    
    @media (max-width: 1150px) {
        font-size: 7rem;
    }
    
    @media (max-width: 768px) {
            font-size: 5rem;
            margin: 0 auto;
        }
    
    @media (max-width: 414px) {
        font-size: 3rem;
    }
`
const Titles = styled.h2`
    margin: 0 auto;
    margin-bottom: 6rem;
    color: #0E4416;
    text-align: center;
    // background: #E0FCDE;
    // border: 1px solid black;
    
    @media (max-width: 1150px) {
        font-size: 2rem;
    }

    @media (max-width: 414px) {
            padding-top: 1rem;
            font-size: 1.05rem;
            margin-bottom: 3rem;
        }
`
const MainContentLogo = styled.img`
    width: 15rem;
    object-fit: cover;
    margin: auto;
    // border: 1px solid black;
    
    @media (max-width: 768px) {
            padding-top: 10rem;
            margin: 0 auto;
        }
    @media (max-width: 414px) {
            padding-top: 1rem;
            width: 10rem;
        }
`

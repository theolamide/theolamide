import React from 'react';
import LogoandHam from './LogoAndHam';
import styled from 'styled-components';
import Footer from './footer';

import Profile from '../Images/About/Profile.jpg';



const About = (props) => {
    console.log(window.navigator)

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />
            <MainContent>
                <AboutWrapper>
                    <AboutHeader>aboutMe</AboutHeader>
                    <AboutParagraph>
                        Daniel, who prefers to go by Ọlámidé, his native middle name, is a Full-Stack Developer and Photographer who is skilled in writing Javascript (ReactJS & NodeJs) and Python.  He has worked on creating various platforms, some of which include Ecommerce sites, productivity apps and lifestyle websites.  Prior to the joining the tech industry, Daniel worked as a Mechanical Engineer designing and servicing fuel trains for industrial heating systems. He has a deep enthusiasm for software development and is continuously working on enhancing his skillsets to be able to consistently deliver quality products to his clients.  When Daniel is not writing some code or debugging behind his computer screen, he can be found behind his camera capturing portraits on the set of a photoshoot.  Photography has always been a principal passion for Daniel and it has given him the ability to view his projects, whether photography and web development from all angles, paying close attention to aesthetic detail.
                    </AboutParagraph>
                </AboutWrapper>
                <ProfileImage src={Profile} alt="profile image" />
            </MainContent>
            <Footer />
        </RootWrapper>
    )
}

export default About;


const RootWrapper = styled.div`
    height: 100%;
    // border: 1px solid blue;
`

const ProfileImage = styled.img`
    margin: 0 auto;
    border-radius: 0.25rem;
    object-fit: cover;
    width: 20%;
    // border: 1px solid red;

        @media (max-width: 768px) {
            width: 33%;
            display: block;
            margin: 0.5rem auto;
        }
        @media (max-width: 414px) {
            width: 80%;
            display: block;
            margin: 0.5rem auto;
        }
`
const AboutWrapper = styled.div`
    margin: 0 auto;
    width: 55%;
    height: 20rem;
    background: #BCE5B9;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid black;

    @media (max-width: 768px) {
            height: 30rem;
        }

    @media (max-width: 414px) {
        width: 93%;
        height: 36rem;
    }
`
const AboutHeader = styled.h2`
    font-size: 3rem;
    margin: 0.25rem 0;
    color: #67973E;
    // border: 1px solid blue;
    @media (max-width: 414px) {
        margin: 0;
    }
`
const AboutParagraph = styled.p`
    margin: 0 auto;
    // border: 1px solid orange;
    color: #0E4416;
    overflow: auto;
        &::-webkit-scrollbar
            {
                width: 3px;
                height: 0px;
                background-color: #E0FCDE;
            } 
        &::-webkit-scrollbar-thumb
            {
                background-color: #134818;
            }
`
const MainContent = styled.div`
    margin: auto;
    margin-top: 1rem;
    width: 90%;
    height: 75vh;
    display: flex;
    justify-content: space-around;
    align-items: center; 
    overflow: auto;
    // border: 1px solid brown;
    @media (max-width: 1400px) {
        height: 62.25%;
        // border: 1px solid blue;
    }

    @media (max-width: 768px) {
        margin-bottom: 0rem;
        height: 82%;
        display: flex;
        flex-direction:column;
        justify-content: space-around;
    }

    @media (max-width: 414px) {
        // width: 93%;
        margin-top: 1rem;
        display: block;
        height: 73%;
        // margin-bottom: 1.5rem;
    }

    &::-webkit-scrollbar
        {
            width: 5px;
            height: 0px;
            background-color: #BCE5B9;
            border-radius: 0.05rem;
        } 
    &::-webkit-scrollbar-thumb
        {
            background-color: #134818;
            border-radius: 0.05rem;
        }
`
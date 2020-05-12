import React from 'react';
import LogoandHam from './LogoAndHam';
import styled from 'styled-components';
import Footer from './footer';

import Profile from '../Images/About/Profile.jpg';



const About = (props) => {

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />
            <MainContent>
                <AboutWrapper>
                    <AboutHeader>aboutMe</AboutHeader>
                    <AboutParagraph>
                        I spend most of my days writing Javascript in the form of ReactJS and NodeJs, but lately I've been writing more Python. In my spare time I like to travel and photograph breathtaking landscapes. In my former life (read a year ago) I was a Mechanical Engineer designing and servicing fuel trains for industrial heating systems. In June 2019, I decided to switch career paths to the Software side of things as I have always been fascinated by Tech and the impact of it. I made the final decision on an 18 day cross country trip that was eye opening and exhilirating at the same time. The reasoning was that life is too short to not go after something I'm really passionate about becasue I feel it's too late. Since making the decision I've literally lived, breathe, slept and eaten code since then trying to get my skills up to employability. I am at a place now where I have learnt enough to know I bring a lot to the table for any employer.
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
    height: 96%;
    // border: 1px solid blue;
`

const ProfileImage = styled.img`
    margin: 0 auto;
    border-radius: 0.25rem;
    object-fit: cover;
    width: 30%;
    // border: 1px solid blue;
        @media (max-width: 414px) {
            width: 95%;
            margin: 0.5rem auto;
        }
`
const AboutWrapper = styled.div`
    margin: 0 auto;
    width: 55%;
    background: #BCE5B9;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid red;
    @media (max-width: 414px) {
        width: 95%;
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
        overflow: scroll;
        &::-webkit-scrollbar
            {
                width: 0px;
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
    margin-top: 2rem;
    width: 95%;
    height: 77%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
    overflow: scroll;
        &::-webkit-scrollbar
            {
                width: 0.25px;
                height: 0px;
                background-color: #E0FCDE;
            } 
        &::-webkit-scrollbar-thumb
            {
                background-color: #134818;
            }

    @media (max-width: 414px) {
        margin-top: 1rem;
        flex-direction: column;
        height: 85%;
        margin-bottom: 1.5rem;
    }
`
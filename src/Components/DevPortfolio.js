import React from 'react';
import LogoandHam from './LogoAndHam';
import Footer from './footer';
import styled from 'styled-components';

import { PortfolioData } from './PortfolioData.js'

const DevPortfolio = (props) => {

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />

            <MapWrapper>
                {PortfolioData.map(project => (
                    <div key={project.index}>
                        <ProjectWrapper>
                            <div className="mainContent">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <ButtonsWrapper>
                                    <div className="tagbuttons">
                                        <h3>Tech Stack: </h3>
                                        <TagButtonDiv>
                                            {project.technologies.map(tech => (
                                                <button className="tags" key={tech} style={{ margin: "0.25rem" }}>
                                                    {tech}
                                                </button>
                                            ))}
                                        </TagButtonDiv>
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ margin: "auto" }} >
                                        <button className="visit">
                                            View Project
                                        </button>
                                    </a>
                                    {/* Render repository link conditionally depending on wether it is private/proprietary or not */}
                                    {project.github === "Private" ?
                                        <p>
                                            <strong>
                                                Private Repository
                                            </strong>
                                        </p> :
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ margin: "auto" }} >
                                            <button className="visit">
                                                View Code
                                        </button>
                                        </a>
                                    }

                                </ButtonsWrapper>
                            </div>

                            <ProjectCover src={project.cover} alt="project cover photo" onClick={() => project.link} />
                        </ProjectWrapper>
                    </div>
                ))}
            </MapWrapper>

            <Footer />

        </RootWrapper>
    )
}

export default DevPortfolio;

const RootWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    // border: 1px solid black;
`

const MapWrapper = styled.div`
    margin: 0 auto;
    width: 95%;
    height: 77vh;
    // border: 1px solid blue;
    overflow: scroll;
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
            @media (max-width: 1280px) {
            height: 80%;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 1400px) {
            height: 65%;
            // border: 1px solid blue;
        }

        @media (max-width: 768px) {
            width: 95%;
            height: 85%;
            margin-bottom: 1.5rem;
        }
        @media (max-width: 414px) {
            width: 95%;
            height: 76%;
            margin-bottom: 0.5rem;
        }
`

const ProjectWrapper = styled.div`
    margin: 1rem auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    background: #BCE5B9;
    padding: 1rem;
    border-radius: 0.5rem;
    // border: 1px solid black;
        .mainContent{
            width: 55%;
                @media (max-width: 414px) {
                    width:100%;
                }
        }
    @media (max-width: 414px) {
        flex-direction: column-reverse;
    }
`

const ProjectCover = styled.img`
    border-radius: 0.25rem;
    object-fit: cover;
    width: 40%;
    cursor: pointer;
        &:hover{
                    // border: 1px solid #134818;
                    transform: scale(1.02);
                    // will-change: transform;
                }
        @media (max-width: 414px) {
            width: 98%;
            margin: 0 auto;
        }
`
const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;

    p{
        margin: auto;      
    }

    .tagbuttons{
        width: 55%;
        //border: 1px solid black;        
    }

    .visit{
    color: #E0FCDE;
    width: 7rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    overflow: hidden;
    position: relative;
    transition: .2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    outline:none;
        
            &::after{
                background-color: #134818;
                border-radius: 0.25rem;
                content: '';
                display: block;
                height: 100%;
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
                transform: translate(-13%, 0);
                transform-origin: top left;
                transition: .2s transform ease-out;
                will-change: transform;
                z-index: -1;
            }
            
            &:hover::after{
                transform: translate(20%, 0);
            }
            
            &:hover{
                border: 2px solid #E0FCDEt;
                color: #E0FCDE;
                transform: scale(1.05);
                will-change: transform;
            }
    }

    @media (max-width: 414px) {
        // border: 1px solid black;        
        flex-direction: column; 
        height: 15rem;
            
        .tagbuttons{
            width: 100%;
            }    
    }
`
const TagButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    // border: 1px solid black;
        
    .tags{
            outline:none;
            &:hover{
                transform: scale(1.05);
            }
        }        

        @media (max-width: 414px) {
            margin-bottom: 2rem;
        }
`
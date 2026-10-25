import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import LogoandHam from './LogoAndHam';
import Footer from './footer';

import Profile from '../Images/About/Profile.jpg';
import { about } from '../content/about';
import { LINKS, RESUME_URL } from '../siteConfig';


const variant = primary => (primary ? 'primary' : undefined);

const ResumeButton = ({ primary }) => (RESUME_URL ? (
    <ButtonAnchor href={RESUME_URL} target="_blank" rel="noopener noreferrer" data-variant={variant(primary)}>
        Résumé
    </ButtonAnchor>
) : null);

// Extra content shown after a section's paragraphs, keyed by section id.
const sectionExtras = () => ({
    journey: (
        <TextLink to="/devportfolio">See selected software projects</TextLink>
    ),
    beyond: (
        <MakingList aria-label="Things I make">
            {about.making.map(item => (
                <MakingItem key={item.name}>
                    <MakingName>{item.name}</MakingName>
                    {item.link && <TextLink to={item.link}>{item.linkLabel}</TextLink>}
                </MakingItem>
            ))}
        </MakingList>
    ),
    contact: (
        <Actions>
            <ButtonAnchor href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" data-variant="primary">
                Message me on LinkedIn
            </ButtonAnchor>
            <ButtonAnchor href={LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub
            </ButtonAnchor>
            <ResumeButton />
        </Actions>
    ),
});

const About = (props) => {
    const extras = sectionExtras();

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />
            <Main>
                <Hero aria-labelledby="about-title">
                    <HeroText>
                        <Eyebrow>About</Eyebrow>
                        <Title id="about-title">{about.title}</Title>
                        {about.intro.map(paragraph => <Lead key={paragraph}>{paragraph}</Lead>)}
                        <Tagline>{about.tagline}</Tagline>
                        <HeroActions>
                            <ResumeButton primary />
                            <ButtonLink to="/devportfolio" data-variant={variant(!RESUME_URL)}>Selected work</ButtonLink>
                            <ButtonAnchor href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</ButtonAnchor>
                            <ButtonAnchor href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</ButtonAnchor>
                        </HeroActions>
                    </HeroText>
                    <Portrait src={Profile} alt="Portrait of Olamide Ajadi" width="600" height="900" />
                </Hero>

                {about.sections.map(section => (
                    <Section key={section.id} aria-labelledby={`${section.id}-title`}>
                        <SectionTitle id={`${section.id}-title`}>{section.heading}</SectionTitle>
                        {section.paragraphs.map(paragraph => <Body key={paragraph}>{paragraph}</Body>)}
                        {extras[section.id]}
                    </Section>
                ))}
            </Main>
            <Footer />
        </RootWrapper>
    )
}

export default About;


const focusRing = `
    &:focus-visible {
        outline: 3px solid #134818;
        outline-offset: 3px;
    }
`

const RootWrapper = styled.div`
    min-height: 100%;
    padding-bottom: 2rem;
`
const Main = styled.main`
    width: 90%;
    max-width: 60rem;
    margin: 2rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 414px) {
        width: calc(100% - 2rem);
        margin-top: 1rem;
    }
`
const Hero = styled.section`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 1rem 0 1.5rem;
    /* Opaque, in the page colour, so the floating particles never sit behind the text. */
    background: #E0FCDE;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 1.5rem;
        padding-top: 0;
    }
`
const HeroText = styled.div`
    flex: 1 1 60%;

    /* On phones, lift the actions (résumé, work, profiles) up under the heading. */
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
const Eyebrow = styled.p`
    margin: 0;
    color: #134818;
    font-size: 0.95rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
`
const Title = styled.h1`
    margin: 0.25rem 0 1.25rem;
    text-align: left;
    font-size: 3.25rem;
    line-height: 1.1;
    font-weight: 700;
    color: #2F5F1C;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 414px) {
        font-size: 2.1rem;
    }
`
const Lead = styled.p`
    order: 3;
    margin: 0 0 1rem;
    max-width: 42rem;
    font-size: 1.15rem;
    line-height: 1.6;
    color: #0E4416;

    @media (max-width: 414px) {
        font-size: 1.05rem;
    }
`
const Tagline = styled.p`
    order: 3;
    margin: 0 0 1.5rem;
    padding-left: 1rem;
    border-left: 0.25rem solid #67973E;
    font-size: 1.25rem;
    line-height: 1.5;
    color: #134818;
`
const Portrait = styled.img`
    flex: 0 0 auto;
    width: 16rem;
    height: auto;
    border-radius: 0.5rem;
    object-fit: cover;

    @media (max-width: 768px) {
        order: -1;
        width: 6.5rem;
        aspect-ratio: 1 / 1;
        object-position: top;
    }
`
const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
`
const HeroActions = styled(Actions)`
    @media (max-width: 768px) {
        order: 2;
        margin: 0 0 1.5rem;
    }
`
const buttonStyles = css`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.75rem;
    padding: 0 1.25rem;
    border: 2px solid #134818;
    border-radius: 0.5rem;
    font-size: 1rem;
    text-decoration: none;
    color: #134818;
    background: transparent;
    transition: background-color 0.15s ease, color 0.15s ease;

    &:hover {
        color: #E0FCDE;
        background: #134818;
    }

    &[data-variant='primary'] {
        color: #E0FCDE;
        background: #134818;
    }

    &[data-variant='primary']:hover {
        background: #0E4416;
    }

    ${focusRing}

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }

    @media (max-width: 414px) {
        flex: 1 1 calc(50% - 0.375rem);
    }
`
const ButtonLink = styled(Link)`
    ${buttonStyles}
`
const ButtonAnchor = styled.a`
    ${buttonStyles}
`
const Section = styled.section`
    background: #BCE5B9;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;

    @media (max-width: 414px) {
        padding: 1.25rem;
    }
`
const SectionTitle = styled.h2`
    margin: 0 0 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: #134818;

    @media (max-width: 414px) {
        font-size: 1.6rem;
    }
`
const Body = styled.p`
    margin: 0 0 1rem;
    max-width: 42rem;
    font-size: 1.1rem;
    line-height: 1.65;
    color: #0E4416;

    @media (max-width: 414px) {
        font-size: 1rem;
    }
`
const TextLink = styled(Link)`
    color: #134818;
    font-size: 1.05rem;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.2em;

    &:hover {
        text-decoration-thickness: 2px;
    }

    ${focusRing}
`
const MakingList = styled.ul`
    list-style: none;
    margin: 1.5rem 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
    align-items: start;
    gap: 0.75rem;
`
const MakingItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #E0FCDE;
`
const MakingName = styled.span`
    font-family: 'Baloo 2', cursive;
    font-size: 1.05rem;
    font-weight: 600;
    color: #0E4416;
`

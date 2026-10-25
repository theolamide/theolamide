import React from 'react';
import styled from 'styled-components';

import { LINKS } from '../siteConfig';

// Plain links instead of a third-party widget, so they always render
// (including in the prerendered HTML) and work with a keyboard.
const SocialLinks = ({ className }) => (
    <List className={className}>
        <li>
            <ExternalLink href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
            </ExternalLink>
        </li>
        <li>
            <ExternalLink href={LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub
            </ExternalLink>
        </li>
    </List>
);

export default SocialLinks;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
`
const ExternalLink = styled.a`
    color: #134818;
    font-size: 1rem;
    text-decoration: underline;
    text-underline-offset: 0.2em;

    &:hover {
        color: #0E4416;
        text-decoration-thickness: 2px;
    }

    &:focus-visible {
        outline: 3px solid #134818;
        outline-offset: 3px;
        border-radius: 0.25rem;
    }
`

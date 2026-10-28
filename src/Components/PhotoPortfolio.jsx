import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './footer';

import SiteHeader from './SiteHeader';
import PhotoGallery from './PhotoGallery';
import { PhotoRoll, CookingRoll } from './PortfolioData.js';

// The first collection is the default; the others open from their hash,
// e.g. /photoportfolio#cooking.
const COLLECTIONS = [
    { id: 'portraits', label: 'Portraits', photos: PhotoRoll, description: 'Portraits and product shoots' },
    {
        id: 'cooking',
        label: 'Home cooking',
        photos: CookingRoll,
        description: 'Home cooking',
        more: { href: 'https://www.instagram.com/lami.madeit/', label: 'More on Instagram: @lami.madeit' },
    },
];

const PhotoPortfolio = () => {
    const { hash } = useLocation();
    const history = useHistory();
    const current = COLLECTIONS.find(c => `#${c.id}` === hash) || COLLECTIONS[0];

    const choose = (collection) => history.replace({ hash: collection === COLLECTIONS[0] ? '' : collection.id });

    return (
        <RootWrapper>
            <SiteHeader />
            <Main>
                <Title>Photography</Title>
                <Switcher role="group" aria-label="Collection">
                    {COLLECTIONS.map(collection => (
                        <SwitchButton
                            key={collection.id}
                            type="button"
                            aria-pressed={collection === current}
                            onClick={() => choose(collection)}
                        >
                            {collection.label} <SwitchCount>({collection.photos.length})</SwitchCount>
                        </SwitchButton>
                    ))}
                </Switcher>
                <PhotoGallery key={current.id} photos={current.photos} label={current.description} />
                {current.more && (
                    <MoreLink href={current.more.href} target="_blank" rel="noopener noreferrer">
                        {current.more.label}
                    </MoreLink>
                )}
            </Main>
            <Footer />
        </RootWrapper>
    )
}

export default PhotoPortfolio;

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
const Switcher = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
`
const SwitchButton = styled.button`
    padding: 0.4rem 1rem;
    border: 1px solid #134818;
    border-radius: 1rem;
    background: #E0FCDE;
    color: #134818;
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;

    &:hover {
        background: #BCE5B9;
    }

    &[aria-pressed='true'] {
        background: #134818;
        color: #E0FCDE;
    }

    ${focusRing}
`
const SwitchCount = styled.span`
    opacity: 0.75;
`
const MoreLink = styled.a`
    display: inline-block;
    margin-top: 0.25rem;
    color: #134818;
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.2em;

    ${focusRing}
`

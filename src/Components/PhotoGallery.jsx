import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SWIPE_DISTANCE = 40;

const Arrow = ({ flip }) => (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
        <path d={flip ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// One photo at a time, fitted and centred in the viewer, with a thumbnail strip
// below. Arrow buttons, the keyboard arrow keys and swiping all move through it.
const PhotoGallery = ({ photos, label }) => {
    const [index, setIndex] = useState(0);
    const thumbStrip = useRef(null);
    const touchStart = useRef(null);
    const current = photos[index];

    const show = (next) => setIndex((next + photos.length) % photos.length);
    const previous = () => show(index - 1);
    const next = () => show(index + 1);

    useEffect(() => {
        // Keep the active thumbnail in view without scrolling the page.
        const strip = thumbStrip.current;
        const thumb = strip && strip.children[index];
        if (thumb && strip.scrollTo) strip.scrollTo({ left: thumb.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2, behavior: 'smooth' });

        // Fetch the neighbours so the next tap is instant.
        [index - 1, index + 1].forEach(i => {
            new Image().src = photos[(i + photos.length) % photos.length].src;
        });
    }, [index, photos]);

    const onKeyDown = (event) => {
        if (event.key === 'ArrowLeft') previous();
        else if (event.key === 'ArrowRight') next();
        else return;
        event.preventDefault();
    };

    const onTouchStart = (event) => { touchStart.current = event.touches[0].clientX; };
    const onTouchEnd = (event) => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        touchStart.current = null;
        if (distance > SWIPE_DISTANCE) previous();
        else if (distance < -SWIPE_DISTANCE) next();
    };

    return (
        <Gallery aria-roledescription="carousel" aria-label={label} onKeyDown={onKeyDown}>
            <Stage onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <StagePhoto key={current.src} src={current.src} alt={current.caption} />
                <StageButton type="button" data-side="left" aria-label="Previous photo" onClick={previous}>
                    <Arrow />
                </StageButton>
                <StageButton type="button" data-side="right" aria-label="Next photo" onClick={next}>
                    <Arrow flip />
                </StageButton>
            </Stage>

            <Caption aria-live="polite">
                <span>{current.caption}</span>
                <Count>{index + 1} / {photos.length}</Count>
            </Caption>

            <Thumbs ref={thumbStrip}>
                {photos.map((photo, i) => (
                    <ThumbButton
                        key={photo.src}
                        type="button"
                        aria-label={`Show photo ${i + 1}: ${photo.caption}`}
                        aria-current={i === index ? 'true' : undefined}
                        onClick={() => show(i)}
                    >
                        <img src={photo.thumb} alt="" />
                    </ThumbButton>
                ))}
            </Thumbs>
        </Gallery>
    );
};

export default PhotoGallery;


const focusRing = `
    &:focus-visible {
        outline: 3px solid #134818;
        outline-offset: 3px;
    }
`

const Gallery = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`
const Stage = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Leave room for the header, caption, thumbnails and footer. */
    height: clamp(18rem, calc(100vh - 19.5rem), 52rem);
    height: clamp(18rem, calc(100svh - 19.5rem), 52rem);
    padding: 0.75rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background: #0E2A12;
    overflow: hidden;
    touch-action: pan-y;

    @media (max-width: 414px) {
        padding: 0.5rem;
        height: clamp(18rem, calc(100svh - 16rem), 40rem);
    }
`
const StagePhoto = styled.img`
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 0.25rem;
`
const StageButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    border: none;
    border-radius: 50%;
    color: #E0FCDE;
    background: rgba(14, 42, 18, 0.55);
    transition: background 0.2s ease;

    &[data-side='left'] { left: 0.75rem; }
    &[data-side='right'] { right: 0.75rem; }

    &:hover {
        background: rgba(14, 42, 18, 0.85);
    }

    &:focus-visible {
        outline: 3px solid #E0FCDE;
        outline-offset: 2px;
    }

    @media (max-width: 414px) {
        width: 2.5rem;
        height: 2.5rem;
        &[data-side='left'] { left: 0.25rem; }
        &[data-side='right'] { right: 0.25rem; }
    }
`
const Caption = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    margin: 0;
    font-size: 1.1rem;
    color: #0E4416;
`
const Count = styled.span`
    flex-shrink: 0;
    font-size: 0.95rem;
    color: #2F5F1C;
    font-variant-numeric: tabular-nums;
`
const Thumbs = styled.div`
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0.25rem 0.25rem 0.5rem;
    scrollbar-width: thin;
    scrollbar-color: #134818 #BCE5B9;

    &::-webkit-scrollbar {
        height: 6px;
        background-color: #BCE5B9;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #134818;
    }
`
const ThumbButton = styled.button`
    flex: 0 0 auto;
    padding: 0;
    border: 2px solid transparent;
    border-radius: 0.25rem;
    background: none;
    opacity: 0.6;
    transition: opacity 0.2s ease;

    img {
        display: block;
        height: 4.5rem;
        width: auto;
        border-radius: 0.15rem;
    }

    &:hover {
        opacity: 1;
    }

    &[aria-current='true'] {
        opacity: 1;
        border-color: #134818;
    }

    ${focusRing}

    @media (max-width: 414px) {
        img { height: 3.75rem; }
    }
`

import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Images/Logo.png';
import HamOpen from '../Images/HamOpen.png';

const NAV_LINKS = [
    { to: '/', label: 'About me', exact: true },
    { to: '/devportfolio', label: 'Software work' },
    { to: '/photoportfolio', label: 'Photography' },
];

const NavLinks = ({ onNavigate }) => NAV_LINKS.map(link => (
    <StyledNavLink key={link.to} to={link.to} exact={link.exact} onClick={onNavigate}>
        {link.label}
    </StyledNavLink>
));

// Desktop: logo and inline links. Phones: logo and a menu button that slides a
// panel in from the right.
const SiteHeader = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const menuButton = useRef(null);
    const panel = useRef(null);
    const wasOpen = useRef(false);

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        if (!open) {
            // Return focus to the menu button, but only after the panel was open.
            if (wasOpen.current && menuButton.current) menuButton.current.focus();
            wasOpen.current = false;
            return undefined;
        }
        wasOpen.current = true;

        const focusable = () => [...panel.current.querySelectorAll('a, button')];
        focusable()[0].focus();

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
            } else if (event.key === 'Tab') {
                // Keep keyboard focus inside the panel while it is open.
                const items = focusable();
                const first = items[0];
                const last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <Header>
            <Link to="/" aria-label="Home">
                <LogoImage src={Logo} alt="" />
            </Link>

            <DesktopNav aria-label="Main">
                <NavLinks />
            </DesktopNav>

            <MenuButton ref={menuButton} type="button" aria-label="Open menu" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
                <img src={HamOpen} alt="" />
            </MenuButton>

            <Backdrop data-open={open} onClick={close} aria-hidden="true" />
            <Panel ref={panel} id="site-menu" role="dialog" aria-modal="true" aria-label="Menu" data-open={open}>
                <CloseButton type="button" aria-label="Close menu" onClick={close}>
                    <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" focusable="false">
                        <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </CloseButton>
                <PanelNav aria-label="Main">
                    <NavLinks onNavigate={close} />
                </PanelNav>
            </Panel>
        </Header>
    );
};

export default SiteHeader;


const MOBILE = '(max-width: 768px)';

const focusRing = `
    &:focus-visible {
        outline: 3px solid #134818;
        outline-offset: 3px;
    }
`

const Header = styled.header`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem 0;

    @media ${MOBILE} {
        padding: 1rem 1rem 0;
    }
`
const LogoImage = styled.img`
    display: block;
    width: 2rem;
`
const DesktopNav = styled.nav`
    display: flex;
    gap: 2rem;

    @media ${MOBILE} {
        display: none;
    }
`
const StyledNavLink = styled(NavLink)`
    color: #134818;
    font-size: 1.1rem;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    padding: 0.25rem 0;

    &:hover {
        border-bottom-color: #67973E;
    }

    &[aria-current='page'] {
        font-weight: 700;
        border-bottom-color: #134818;
    }

    ${focusRing}
`
const iconButton = `
    padding: 0;
    border: none;
    border-radius: 0.25rem;
    background: none;
    cursor: pointer;

    img {
        display: block;
        width: 3rem;
    }

    ${focusRing}
`
const MenuButton = styled.button`
    ${iconButton}
    display: none;

    @media ${MOBILE} {
        display: block;
    }
`
const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 250;
    background: rgba(14, 68, 22, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease, visibility 0s linear 0.25s;

    &[data-open='true'] {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.25s ease, visibility 0s;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`
const Panel = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 300;
    width: min(80vw, 20rem);
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    background: #BCE5B9;
    box-shadow: -0.25rem 0 1.5rem rgba(14, 68, 22, 0.25);
    transform: translateX(100%);
    /* Visible at once on open, so focus can move in; hidden after the slide on close. */
    visibility: hidden;
    transition: transform 0.25s ease, visibility 0s linear 0.25s;

    &[data-open='true'] {
        transform: translateX(0);
        visibility: visible;
        transition: transform 0.25s ease, visibility 0s;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`
const CloseButton = styled.button`
    ${iconButton}
    align-self: flex-end;
    padding: 0.5rem;
    color: #134818;

    svg {
        display: block;
    }
`
const PanelNav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    ${StyledNavLink} {
        display: flex;
        align-items: center;
        min-height: 3rem;
        font-size: 1.35rem;
        border-bottom: 1px solid rgba(19, 72, 24, 0.2);
    }

    ${StyledNavLink}[aria-current='page'] {
        border-bottom-color: rgba(19, 72, 24, 0.2);
    }
`

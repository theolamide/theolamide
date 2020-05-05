import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../Images/Logo.png';
import HamClose from '../Images/HamClose.png'

const TopDrawer = ({ closeDrawer }) => {


    return (
        <RootWrapper>
            <TopContainer>
                <Link to="/" onClick={closeDrawer}>
                    <LogoWrapper src={Logo} alt="logo" />
                </Link>

                <LinkAndHamWrapper>
                    <LinkWrapper>

                        <StyledLink to="/about" onClick={closeDrawer}>aboutMe</StyledLink>

                        <StyledLink to="/devportfolio" onClick={closeDrawer}>myDevWork</StyledLink>

                        <StyledLink to="/photoportfolio" onClick={closeDrawer}>myPhotoWork</StyledLink>

                        {/* <StyledLink to="/skillset" onClick={closeDrawer}>mySkillset</StyledLink>


                        <StyledLink to="/contact" onClick={closeDrawer}>contactMe</StyledLink>

                        <StyledLink to="/store" onClick={closeDrawer}>buyMyArt</StyledLink> */}
                    </LinkWrapper>

                    <HamWrapper onClick={closeDrawer}>
                        <CloseHamTag src={HamClose} />
                    </HamWrapper>
                </LinkAndHamWrapper>

            </TopContainer>
        </RootWrapper>
    )
};

export default TopDrawer;

const RootWrapper = styled.div`
    height: 5rem;
    width: 100%;
    background: #BCE5B9;
    position: fixed;
    top:0;
    right:0;
    z-index: 200;
    display:flex;
    justify-content: space-between;
    // border: 1px solid black;
    @media (max-width: 414px) {
            height:25rem;
        }
`
const TopContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
    // border: 1px solid black;
`
const LogoWrapper = styled.img`
    width: 2rem;
    height: 3.1rem;
    // object-fit: cover;
    cursor: pointer;
`
const LinkAndHamWrapper = styled.div`
    // border: 1px solid black;
    width: 70%;
    display: flex;
    justify-content: space-between;
        @media (max-width: 414px) {
                flex-direction: column-reverse;
                align-items: flex-end;
            }
`
const LinkWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // border: 1px solid black;
    @media (max-width: 414px) {
                flex-direction: column;
                align-items: flex-end;
                height: 70%;
                margin: 0 0.5rem 2rem 0;
            }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0E4416;
    // border: 1px solid black;

    &:hover{
                transform: scale(1.15);
                // transition: .2s transform ease-out;
                transition: .2s transform ease-in;
            }

    @media (max-width: 414px) {
        border-right: 2px solid #67973E;
        padding-right: 0.5rem;
    }
`
const HamWrapper = styled.div`
    cursor: pointer;
    // border: 1px solid black;
`
const CloseHamTag = styled.img`
    object-fit: cover;
    width: 3rem;
    margin: auto;
`
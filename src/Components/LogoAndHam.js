import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../Images/Logo.png';
import HamOpen from '../Images/HamOpen.png'


const LogoandHam = (props) => {


    return (
        <TopContainer>
            <Link to="/">
                <LogoWrapper src={Logo} />
            </Link>
            <HamWrapper onClick={props.drawerToggleClickHandler}>
                <OpenHamTag src={HamOpen} />
            </HamWrapper>
        </TopContainer>
    )
}

export default LogoandHam;

const TopContainer = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
    margin: 0 auto;
    padding: 0 2rem;
    padding-top: 1rem;
    // -webkit-box-shadow: 0px 2px 15px 0px rgba(19,72,24,0.42);
    // -moz-box-shadow: 0px 2px 15px 0px rgba(19,72,24,0.42);
    // box-shadow: 0px 2px 15px 0px rgba(19,72,24,0.42);
            @media (max-width: 414px) {
                            width: 95%;
                            padding: 0 0.6rem;
                            padding-top: 1rem;
                        }
`
const LogoWrapper = styled.img`
    width: 2rem;
    object-fit: cover;
    cursor: pointer;
`
const HamWrapper = styled.div`
    cursor: pointer;
`
const OpenHamTag = styled.img`
    object-fit: cover;
    width: 3rem;
    margin: auto;
`
import React from 'react';
import styled from 'styled-components';

import SocialLinks from './SocialLinks';


const FooterBox = styled.footer`
    margin: 4rem auto 0;
    width: fit-content;
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background: #BCE5B9;
        @media (max-width: 414px) {
            margin-top: 1.25rem;
        }
`


const Footer = () => {

    return (
        <FooterBox>
            <SocialLinks />
        </FooterBox>
    )
}

export default Footer;

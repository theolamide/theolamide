import React from 'react';

import styled from 'styled-components';
import { InlineFollowButtons } from 'sharethis-reactjs';


const FooterBox = styled.div`
    width: 100%;
    height: 3.5rem;
    text-align:center;
    // background: #E0FCDE;
    background: none;
    padding-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;
        @media (max-width: 768px) {
            height: 30rem;
            flex-direction: column;
        }
`
const LogoBox = styled.div`
    //border: 1px solid white;
    width: 50rem;
    text-align: center;
    color: white;
        @media (max-width: 768px) {
            margin: 0 auto;
            width:100%;
        }
`


const Footer = () => {

    return (
        <FooterBox>
            <LogoBox>
                <InlineFollowButtons       //From sharethis-reactjs Library
                    config={{
                        action: 'Follow us:', // call to action (STRING)
                        action_enable: false,  // show/hide call to action (true, false)
                        action_pos: 'bottom', // position of call to action (left, top, right)
                        alignment: 'center',  // alignment of buttons (left, center, right)
                        color: 'social',       // set the color of buttons (social, white)
                        enabled: true,        // show/hide buttons (true, false)
                        networks: [           // which networks to include (see FOLLOW NETWORKS)
                            'linkedin',
                            'github'
                        ],
                        padding: 8,           // padding within buttons (INTEGER)
                        profiles: {           // social profile links for buttons
                            linkedin: '/in/daniel-olamide-ajadi/',
                            github: 'theolamide'
                        },
                        radius: 15,            // the corner radius on each button (INTEGER)
                        size: 32,             // the size of each button (INTEGER)
                        spacing: 12            // the spacing between buttons (INTEGER)
                    }}
                />
            </LogoBox>
        </FooterBox>
    )
}

export default Footer;
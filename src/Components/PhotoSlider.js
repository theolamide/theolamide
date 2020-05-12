import React from 'react';
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { PhotoRoll } from './PortfolioData.js';


const PhotoSlider = () => {

    return (
        <RootWrapper>
            <Car showArrows={true} autoPlay={true} infiniteLoop={true}>
                {PhotoRoll.map(photos => (
                    <div>
                        <img src={photos.src} alt={photos.caption} />
                        <p className="legend">{photos.caption}</p>
                    </div>
                ))}
            </Car>
        </RootWrapper>
    )
}

export default PhotoSlider;



const RootWrapper = styled.div`
    width: 37rem;
    height: 96%;
    margin: auto;
    @media (max-width: 414px) {
        width: 100%;
    }
`
const Car = styled(Carousel)`
    margin: auto;
    width: 90%;
    height: 70%;
    background: white;
    // border: 2px solid blue;

        div{
            margin: auto;
        }

`
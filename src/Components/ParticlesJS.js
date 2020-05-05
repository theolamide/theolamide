import React from "react";
import Particles from 'react-particles-js';


import Camera from '../Images/Icons/Camera.png';
import CreativeCloud from '../Images/Icons/CreativeCloud.png';
import CSS from '../Images/Icons/CSS.png';
import Git from '../Images/Icons/Git.png';
import Javascript from '../Images/Icons/Javascript.png';
import LightRoom from '../Images/Icons/LightRoom.png';
import MatLab from '../Images/Icons/MatLab.png';
import NodeJs from '../Images/Icons/NodeJs.png';
import PhotoShop from '../Images/Icons/PhotoShop.png';
import Python from '../Images/Icons/Python.png';
import ReactJs from '../Images/Icons/ReactJs.png';
import SQL from '../Images/Icons/SQL.png';
import VintageCamera from '../Images/Icons/VintageCamera.png';

const ParticlesJS = () => {


    return (
        <div>

            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 15,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 10,
                            "out_mode": "bounce"
                        },
                        "shape": {
                            "type": [
                                "images",
                                "circle"
                            ],
                            "images": [
                                {
                                    "src": `${Javascript}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${Camera}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${CreativeCloud}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${Git}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${CSS}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${LightRoom}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${MatLab}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${PhotoShop}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${Python}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${SQL}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${VintageCamera}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${ReactJs}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${NodeJs}`,
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#B677D6"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 15,
                                "sync": false
                            }
                        },
                        interactivity: {
                            detect_on: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: false,
                                    mode: "bubble"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                    },

                    "retina_detect": false
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#E0FCDE"
                }} />
        </div >
    )
}

export default ParticlesJS;
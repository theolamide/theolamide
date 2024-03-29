import MerchDropperCover from '../Images/DevPortfolioGallery/MerchDropperCover.JPG';
import HowFinderCover from '../Images/DevPortfolioGallery/HowFinderCover.JPG';
import CainAfrica from '../Images/DevPortfolioGallery/CainAfrica.JPG';
import TodoList from '../Images/DevPortfolioGallery/TodoList.JPG'
import ShapesSVGCover from '../Images/DevPortfolioGallery/ShapesSVGCover.JPG'

import Akolade1 from '../Images/PhotoPortfolioGallery/Akolade1.jpg'
import Avatar1 from '../Images/PhotoPortfolioGallery/Avatar1.jpg'
import Billy1 from '../Images/PhotoPortfolioGallery/Billy1.jpg'
import Bri1 from '../Images/PhotoPortfolioGallery/Bri1.jpg'
import Bri2 from '../Images/PhotoPortfolioGallery/Bri2.jpg'
import Bri3 from '../Images/PhotoPortfolioGallery/Bri3.jpg'
import DIC1 from '../Images/PhotoPortfolioGallery/DIC1.jpg'
import DIC2 from '../Images/PhotoPortfolioGallery/DIC2.jpg'
import Eli1 from '../Images/PhotoPortfolioGallery/Eli1.jpg'
import Eli2 from '../Images/PhotoPortfolioGallery/Eli2.jpg'
import Eli3 from '../Images/PhotoPortfolioGallery/Eli3.jpg'
import Elizabeth1 from '../Images/PhotoPortfolioGallery/Elizabeth1.jpg'
import Eze1 from '../Images/PhotoPortfolioGallery/Eze1.jpg'
import Fire1 from '../Images/PhotoPortfolioGallery/Fire1.jpg'
import GP1 from '../Images/PhotoPortfolioGallery/GP1.jpg'
import GP2 from '../Images/PhotoPortfolioGallery/GP2.jpg'
import GP3 from '../Images/PhotoPortfolioGallery/GP3.jpg'
import IBK1 from '../Images/PhotoPortfolioGallery/IBK1.jpg'
import Ice1 from '../Images/PhotoPortfolioGallery/Ice1.jpg'
import Nacari1 from '../Images/PhotoPortfolioGallery/Nacari1.jpg'
import Som1 from '../Images/PhotoPortfolioGallery/Som1.jpg'
import Van1 from '../Images/PhotoPortfolioGallery/Van1.jpg'
import Viva1 from '../Images/PhotoPortfolioGallery/Viva1.jpg'
import Viva2 from '../Images/PhotoPortfolioGallery/Viva2.jpg'
import Viva3 from '../Images/PhotoPortfolioGallery/Viva3.jpg'



export const PortfolioData = [
    {
        index: 1,    //These should be incremental from the last interger
        title: "Shapes",
        cover: `${ShapesSVGCover}`,
        description: "Shapes is a little fun demonstration in the use of localstroge for populating, holding, retrieving, and mutating data as needed as well as data persistence. Along with that, it is also a study of input interaction while using their parameters to draw SVG shapes on a 'canvas'. It is styled with vanilla CSS and is fully responsive.",
        technologies: ["ReactJS", "Vanilla CSS", "LocalStorage", ],
        link: "https://shapes-svg.theolamide.vercel.app/",
        github: "https://github.com/theolamide/ShapesSVG"
    },
    {
        index: 2,    //These should be incremental from the last interger
        title: "Todo List",
        cover: `${TodoList}`,
        description: "Todo List, as the name implies, is a productivity web app that can be used to keep simple lists. This app is always in progress and future versions will have image attachment to individual list items, timers amongst other things.",
        technologies: ["ReactJS", "useReducer", "CSS"],
        link: "https://reducer-todo.theolamide.now.sh/",
        github: "https://github.com/theolamide/reducer-todo"
    },
//     {
//         index: 3,    //These should be incremental from the last interger
//         title: "Merch Dropper",
//         cover: `${MerchDropperCover}`,
//         description: "Merch Dropper is the fastest way to set up a hassle free merch shop. The end goal was to create an online drop-shipping platform to upload designs and create products that plug into scalablepress.com. I worked on this project for 8 weeks with a group of 5 other student developers and 2 UI/UX designers before passing it on to the next cohort as a build-on project. I specifically worked on shopping cart population, checkout payments integration utilizing Stripe, mobile view hamburger & navigation, state persistence, and the README documentation on the frontend. On the backend, I worked on the data schema design and population.",
//         technologies: ["ReactJS", "NodeJS", "Express", "Redux", "axios", "knex", "PostgressSQL", "Jest"],
//         link: "https://merchdropper.netlify.app/",
//         github: "https://github.com/Lambda-School-Labs/Merch-Dropper-fe"
//     },
    {
        index: 4,    //These should be incremental from the last interger
        title: "CAIN Africa",
        cover: `${CainAfrica}`,
        description: "A fully responsive informational website for a non profit focused on education and healthcare for the less priviledged in Africa. Website must haves included donations and forms handling, blogging capability, and gallery carousel. Paypal, and Paystack were used to handle collections of monnies, external API call was made to the organizations Medium page to display blog posts, and React Grid Library for image gallery. This website was single handedly built by me.",
        technologies: ["ReactJS", "axios", "react-grid-gallery", "styled-components"],
        link: "https://www.cainafrica.org/#/",
        github: "Private"
    }
]


export const PhotoRoll = [
    {
        src: `${Akolade1}`,
        caption: "Fresh Prince"
    },
    {
        src: `${Bri1}`,
        caption: "Colored Beauty"
    },
    {
        src: `${Bri2}`,
        caption: "Reach"
    },
    {
        src: `${Bri3}`,
        caption: "Angels Among Us"
    },
    {
        src: `${DIC1}`,
        caption: "Pink, a product shoot for DIC Beauty"
    },
    {
        src: `${Eli1}`,
        caption: "Thinking Man"
    },
    {
        src: `${Eli2}`,
        caption: "Melanin King 1"
    },
    {
        src: `${Eli3}`,
        caption: "Melanin King 2"
    },
    {
        src: `${Elizabeth1}`,
        caption: "Among Planets"
    },
    {
        src: `${Fire1}`,
        caption: "Red"
    },
    {
        src: `${GP3}`,
        caption: "Pre-Wedding: Pelumi and Gabe"
    },
    {
        src: `${Ice1}`,
        caption: "Ice Princess"
    },
    {
        src: `${Som1}`,
        caption: "CWRU 2019 Grad"
    },
    {
        src: `${Van1}`,
        caption: "CWRU 2019 Grad"
    },
    {
        src: `${Viva1}`,
        caption: "Product Shoot: VIVA African"
    },
    {
        src: `${Viva2}`,
        caption: "Product Shoot: VIVA African"
    },
    {
        src: `${Viva3}`,
        caption: "Product Shoot: VIVA African"
    },
    {
        src: `${IBK1}`,
        caption: "Melanin and Pastel: A match made in Heaven"
    },
    {
        src: `${Nacari1}`,
        caption: "Peachy"
    },
    {
        src: `${Eze1}`,
        caption: "Thou shall not be crusty on LinkedIn"
    },
    {
        src: `${GP2}`,
        caption: "Pre-Wedding: Pelumi and Gabe"
    },
    {
        src: `${Avatar1}`,
        caption: "Avatar"
    },
    {
        src: `${Billy1}`,
        caption: "Melanin Overload"
    },
    {
        src: `${GP1}`,
        caption: "Pre-Wedding: Pelumi and Gabe"
    },
    {
        src: `${DIC2}`,
        caption: "Hair Sisters"
    }
]

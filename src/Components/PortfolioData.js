import CainAfrica from '../Images/DevPortfolioGallery/CainAfrica.JPG';
import TodoList from '../Images/DevPortfolioGallery/TodoList.JPG'
import ShapesSVGCover from '../Images/DevPortfolioGallery/ShapesSVGCover.JPG'
import TilerCover from '../Images/DevPortfolioGallery/TilerCover.jpg'
import WoduCover from '../Images/DevPortfolioGallery/WoduCover.jpg'

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



// Shown above the project list on the Software work page, in this order.
export const FeaturedProducts = [
    {
        id: "tiler",
        title: "Tiler",
        tagline: "AI-Powered Scheduling Assistant",
        cover: `${TilerCover}`,
        coverSize: [1240, 600],
        coverAlt: "Tiler's home page, showing a to-do list turned into a scheduled day",
        description: [
            "An intelligent scheduling assistant that transforms everyday to-dos into realistic, adaptive calendars. Tiler uses AI to understand tasks, account for priorities, deadlines, and travel time, and automatically adjust schedules as plans change.",
            "As co-founder and CTO, I helped bring Tiler from concept to a working product, building intuitive user experiences, AI-powered features, and the engineering infrastructure to support them.",
        ],
        technologies: ["ReactJS", "TypeScript", "ASP.NET (C#)", "SQL Server", "OpenAI API", "Google Calendar API"],
        link: "https://tiler.app",
        linkLabel: "Visit tiler.app",
    },
    {
        id: "wodu",
        title: "Wọ́dù",
        tagline: "A Daily Yorùbá Word Game",
        cover: `${WoduCover}`,
        coverSize: [866, 765],
        coverAlt: "Wọ́dù's game board: a five-letter grid above a Yorùbá keyboard with tone-marked letters",
        description: [
            "A culturally inspired take on Wordle that makes learning and practicing Yorùbá fun, one word at a time. Wọ́dù reimagines the familiar word-guessing experience with a custom Yorùbá keyboard, tone-aware letter handling, and daily puzzles that celebrate the language.",
            "I designed and built Wọ́dù from the ground up, tackling unique linguistic and technical challenges while creating an accessible, engaging experience that bridges technology, language, and culture.",
        ],
        technologies: ["ReactJS", "Cloudflare Workers", "Django REST Framework", "PostgreSQL"],
        link: "https://wodu.app",
        linkLabel: "Play at wodu.app",
    },
]

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

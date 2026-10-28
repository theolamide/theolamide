import CainAfrica from '../Images/DevPortfolioGallery/CainAfrica.JPG';
import TodoList from '../Images/DevPortfolioGallery/TodoList.JPG'
import ShapesSVGCover from '../Images/DevPortfolioGallery/ShapesSVGCover.JPG'
import TilerCover from '../Images/DevPortfolioGallery/TilerCover.jpg'
import WoduCover from '../Images/DevPortfolioGallery/WoduCover.jpg'

// Full-size photos and their 200px-tall thumbnails, looked up by folder and file name.
const photoFiles = import.meta.glob('../Images/{PhotoPortfolioGallery,CookingGallery}/*.jpg', { eager: true, import: 'default' })
const thumbFiles = import.meta.glob('../Images/{PhotoPortfolioGallery,CookingGallery}/thumbs/*.jpg', { eager: true, import: 'default' })
const galleryPhoto = (folder) => (name, caption) => ({
    src: photoFiles[`../Images/${folder}/${name}.jpg`],
    thumb: thumbFiles[`../Images/${folder}/thumbs/${name}.jpg`],
    caption,
})
const photo = galleryPhoto('PhotoPortfolioGallery')
const dish = galleryPhoto('CookingGallery')



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
    },
]

export const PortfolioData = [
    {
        index: 1,    //These should be incremental from the last interger
        title: "Shapes",
        cover: `${ShapesSVGCover}`,
        description: "Shapes is a little fun demonstration in the use of localstroge for populating, holding, retrieving, and mutating data as needed as well as data persistence. Along with that, it is also a study of input interaction while using their parameters to draw SVG shapes on a 'canvas'. It is styled with vanilla CSS and is fully responsive.",
        technologies: ["ReactJS", "Vanilla CSS", "LocalStorage", ],
        link: "https://shapes-svg.theolamide.vercel.app/"
    },
    {
        index: 2,    //These should be incremental from the last interger
        title: "Todo List",
        cover: `${TodoList}`,
        description: "Todo List, as the name implies, is a productivity web app that can be used to keep simple lists. This app is always in progress and future versions will have image attachment to individual list items, timers amongst other things.",
        technologies: ["ReactJS", "useReducer", "CSS"],
        link: "https://reducer-todo.theolamide.now.sh/"
    },
    {
        index: 4,    //These should be incremental from the last interger
        title: "CAIN Africa",
        cover: `${CainAfrica}`,
        description: "A fully responsive informational website for a non profit focused on education and healthcare for the less priviledged in Africa. Website must haves included donations and forms handling, blogging capability, and gallery carousel. Paypal, and Paystack were used to handle collections of monnies, external API call was made to the organizations Medium page to display blog posts, and React Grid Library for image gallery. This website was single handedly built by me.",
        technologies: ["ReactJS", "axios", "react-grid-gallery", "styled-components"],
        link: "https://www.cainafrica.org/#/"
    }
]


export const PhotoRoll = [
    photo('Akolade1', "Fresh Prince"),
    photo('Bri1', "Colored Beauty"),
    photo('Bri2', "Reach"),
    photo('Bri3', "Angels Among Us"),
    photo('DIC1', "Pink, a product shoot for DIC Beauty"),
    photo('Eli1', "Thinking Man"),
    photo('Eli2', "Melanin King 1"),
    photo('Eli3', "Melanin King 2"),
    photo('Elizabeth1', "Among Planets"),
    photo('Fire1', "Red"),
    photo('GP3', "Pre-Wedding: Pelumi and Gabe"),
    photo('Ice1', "Ice Princess"),
    photo('Som1', "CWRU 2019 Grad"),
    photo('Van1', "CWRU 2019 Grad"),
    photo('Viva1', "Product Shoot: VIVA African"),
    photo('Viva2', "Product Shoot: VIVA African"),
    photo('Viva3', "Product Shoot: VIVA African"),
    photo('IBK1', "Melanin and Pastel: A match made in Heaven"),
    photo('Nacari1', "Peachy"),
    photo('Eze1', "Thou shall not be crusty on LinkedIn"),
    photo('GP2', "Pre-Wedding: Pelumi and Gabe"),
    photo('Avatar1', "Avatar"),
    photo('Billy1', "Melanin Overload"),
    photo('GP1', "Pre-Wedding: Pelumi and Gabe"),
    photo('DIC2', "Hair Sisters")
]


// Home cooking, from Instagram @lami.madeit, in this order.
export const CookingRoll = [
    dish('jollof-lamb-chop', "Jollof rice with lamb chop"),
    dish('lamb-shank-polenta', "Braised lamb shank on polenta"),
    dish('suya-wings', "Suya wings, potatoes and dodo"),
    dish('asaro-mackerel', "Àsáró with fried mackerel"),
    dish('egusi', "Ẹ̀gúsí"),
    dish('salmon-salad', "Pan-seared salmon and salad"),
    dish('roast-chicken', "Roast chicken"),
    dish('gnocchi-chicken', "Gnocchi in almond cream with chicken"),
    dish('pasta-chicken', "Creamy pasta with chicken"),
    dish('chicken-ramen', "Chicken ramen"),
    dish('deconstructed-lasagna', "Deconstructed lasagna"),
    dish('stuffed-shells', "Stuffed shell pasta"),
    dish('sunday-lunch', "Sunday lunch spread"),
    dish('june-dinner-table', "Peppersoup, rice, beans and dodo"),
    dish('strawberry-toast', "Strawberry toast"),
    dish('french-toast-breakfast', "French toast, bacon and eggs"),
    dish('bagel-breakfast', "Bagel, eggs, bacon and avocado")
]

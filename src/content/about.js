// About page copy, kept as data so the layout can change without touching the words.
// Editorial rules: no em dashes, Tiler is a past role, no embellishment.

export const about = {
    title: 'A builder at heart. An engineer by profession.',
    intro: [
        "I've always been fascinated by how things work. Not just software, but machines, everyday objects, and the systems that make our world function. I like taking things apart, understanding what makes them tick, and figuring out how to make them better. Sometimes that means writing code. Other times, it means opening up CAD software, working with my hands, or experimenting with an idea simply because I'm curious whether it'll work.",
        "I'm Olamide, a software engineer with a background in mechanical engineering. My career has taken me from designing and working with physical systems to building software products, investigating complex technical problems, and improving the performance and reliability of applications.",
    ],
    tagline: "The medium has changed, but the motivation hasn't.",
    sections: [
        {
            id: 'journey',
            heading: 'How I got here',
            paragraphs: [
                'I started in mechanical engineering, working with machinery, mechanical design, and industrial systems. In 2020, I made the transition into software development, bringing with me the analytical foundation and problem-solving instincts I\'d developed as an engineer.',
                "Since then, I've worked across the software stack, from data ingestion and backend systems to frontend applications and product engineering.",
                "I've also experienced building a product from the founder's side. As co-founder and CTO of Tiler, an AI-enabled productivity startup, I helped turn an idea into a product that reached users. Although that chapter has since closed, it taught me a great deal about ownership, product decisions, technical tradeoffs, and the realities of building something from scratch.",
            ],
        },
        {
            id: 'approach',
            heading: 'How I think about building',
            paragraphs: [
                'I enjoy problems that require more than knowing which tool to use.',
                'I like understanding the underlying system, identifying the actual problem, testing assumptions, and finding solutions that are thoughtful, practical, and sustainable.',
                "Over the years, I've learned that engineering isn't just about making something work. It's about understanding why it works, how it might fail, and whether there's a better way to build it.",
                "I'm particularly drawn to work where I can combine technical depth with product thinking and meaningful ownership.",
            ],
        },
        {
            id: 'beyond',
            heading: 'Beyond software',
            paragraphs: [
                "My curiosity doesn't stop when I close my laptop.",
                "I enjoy 3D modeling, woodworking, and finding opportunities to turn ideas into physical objects. I'm also an enthusiastic home cook, and I have a deep appreciation for Yorùbá language and culture.",
                'I find satisfaction in the process of making things, whether the result is a working application, a carefully designed object, or a meal worth sharing.',
                "I suppose that's the common thread: I like to build.",
            ],
        },
        {
            id: 'contact',
            heading: "What's next?",
            paragraphs: [
                "I'm interested in challenging engineering problems, thoughtful teams, and opportunities to build products and systems that make a meaningful difference.",
                "If you're working on something interesting, I'd love to hear about it.",
            ],
        },
    ],
    // Shown under "Beyond software". Add photos or links here as projects are documented.
    making: [
        { name: 'Photography', link: '/photoportfolio', linkLabel: 'See the portraits' },
        { name: '3D modeling' },
        { name: 'Woodworking' },
        { name: 'Home cooking', link: '/photoportfolio#cooking', linkLabel: 'See the food' },
        { name: 'Yorùbá language and culture' },
    ],
};

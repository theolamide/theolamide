// Site-wide settings: one place to update links, the résumé, and per-page metadata.

export const SITE_URL = 'https://www.theolamide.me';
export const SITE_NAME = 'theỌlámidé';
export const PERSON_NAME = 'Olamide Ajadi';

export const LINKS = {
    linkedin: 'https://www.linkedin.com/in/daniel-olamide-ajadi',
    github: 'https://github.com/theolamide',
};

// Set to a file in public/ (e.g. '/Olamide-Ajadi-Resume.pdf') or a hosted URL.
// Résumé buttons stay hidden while this is null.
export const RESUME_URL = '/Daniel-Olamide-Ajadi-Resume.pdf';

export const OG_IMAGE = `${SITE_URL}/OgThumbnail.JPG`;

// Every route listed here is prerendered to static HTML at build time.
export const PAGES = {
    '/': {
        title: `${SITE_NAME} | ${PERSON_NAME}`,
        description: 'Olamide Ajadi is a software engineer with a background in mechanical engineering. Software projects, photography, and things built along the way.',
    },
    '/about': {
        title: `About | ${PERSON_NAME}`,
        description: 'A builder at heart. An engineer by profession. How a mechanical engineer became a software engineer, how I think about building, and what I make beyond software.',
    },
    '/devportfolio': {
        title: `Development work | ${PERSON_NAME}`,
        description: 'Selected software projects by Olamide Ajadi, with live links and source code where available.',
    },
    '/photoportfolio': {
        title: `Photography | ${PERSON_NAME}`,
        description: 'Portrait, event, and product photography by Olamide Ajadi.',
    },
};

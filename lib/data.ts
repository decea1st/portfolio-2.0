import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ffsaraf12@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Fardin, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Dece1st' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/fardin-saraf/' },
];

export const MY_STACK = {
    languages: [
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'CSS',
        },
        {
            name: 'HTML',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.svg',
        },
        {
            name: 'Java',
        },
        {
            name: 'SQL',
            icon: '/logo/postgreSQL.png',
        },
    ],
    frameworks: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
    ],
    'databases / tools': [
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Claude',
            icon: '/logo/claude.svg',
        },
        {
            name: 'Cursor',
            icon: '/logo/cursor.svg',
        },
        {
            name: 'Codex',
            icon: '/logo/codex.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Clustr',
        slug: 'clustr',
        liveUrl: 'https://clustrgoals.com/',
        year: 2026,
        description: `
      Clustr is a landing page for a social accountability app that helps people find others with similar goals and commit to those goals together. The design uses a clean white layout, direct hero messaging, warm orange accents, and a lightweight product-card visual to explain the concept quickly. <br/><br/>

      Key Features:
      <ul>
        <li>Responsive landing page focused on clear product positioning and waitlist conversion</li>
        <li>Minimal navigation and high-contrast call-to-action treatment for quick scanning</li>
        <li>Product-style profile card mockup to make the app concept feel concrete</li>
        <li>Polished spacing, typography, and visual hierarchy designed for a startup launch page</li>
      </ul>
      `,
        role: `
      Designer and Developer <br/>
      I designed and built the public-facing Clustr website, shaping the hero section, visual language, responsive layout, and call-to-action flow for the product's early waitlist launch.
      `,
        techStack: ['React', 'TypeScript', 'CSS', 'Cloudflare'],
        thumbnail: '/projects/thumbnail/clustr.png',
        longThumbnail: '/projects/long/clustr.png',
        images: ['/projects/images/clustr-1.png'],
    },
    {
        title: 'Outbreak.io',
        slug: 'outbreak-io',
        liveUrl: 'https://outbreakio.dev',
        sourceCode: 'https://github.com/decea1st/Outbreak.io',
        year: 2026,
        description: `
      Outbreak.io is a live public health surveillance dashboard for New York City. Users can track reported symptoms on an interactive map, explore COVID-19, influenza, and RSV trends from official NYC health data, and submit their own anonymous reports. <br/><br/>

      Key Features:
      <ul>
        <li>Interactive map of user-reported symptoms across NYC with filtering</li>
        <li>Public analytics dashboard with report volume, condition breakdowns, and surveillance trends</li>
        <li>Anonymous symptom reporting with automatic expiration and ML-based condition classification</li>
        <li>Optional accounts with JWT authentication and admin moderation tools</li>
        <li>Automated weekly ingestion of NYC Department of Health data via GitHub Actions</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Started as a five-person senior design project at CCNY; I extended it into a public-facing surveillance tool, building the respiratory illness data pipeline, anonymous reporting flow, and public map and dashboard experience across the Expo frontend and Express API.
      `,
        techStack: [
            'React Native',
            'Expo',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
            'scikit-learn',
        ],
        thumbnail: '/projects/thumbnail/outbreak-io.png',
        longThumbnail: '/projects/long/outbreak-io.png',
        images: [
            '/projects/images/outbreak-io-1.png',
            '/projects/images/outbreak-io-2.png',
            '/projects/images/outbreak-io-3.png',
        ],
    },
    {
        title: 'CampusVoice',
        slug: 'campusvoice',
        sourceCode: 'https://github.com/HashirAligb/campusvoice',
        year: 2025,
        description: `
      CampusVoice is a community-driven platform where students can raise issues, share feedback, and work together to improve campus life. Students submit and browse campus issues, discuss them, and track their status as they move toward resolution. <br/><br/>

      Key Features:
      <ul>
        <li>Issue reporting and browsing with community discussion around each report</li>
        <li>Student accounts with profiles for submitting and following issues</li>
        <li>Supabase backend with a PostgreSQL schema and file storage for attachments</li>
        <li>Fast Vite-powered React frontend written in TypeScript</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      I worked on CampusVoice as part of a small team, contributing across the React + TypeScript frontend and the Supabase backend, including the issue reporting flow and database schema.
      `,
        techStack: [
            'React',
            'TypeScript',
            'Vite',
            'Supabase',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/campusvoice.png',
        longThumbnail: '/projects/long/campusvoice.png',
        images: ['/projects/images/campusvoice-1.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineering Intern',
        company: 'Clustr',
        duration: 'Oct 2025 - Current',
        bullets: [
            'Engineered a 6-state collaborative activity pipeline in Firebase Cloud Functions using Firestore transactions, Pub/Sub, and task queues to automate invite resolution, timed activity start/end transitions, and milestone progression.',
            'Built a semantic intro-matching pipeline, achieving 95%+ match reliability across 500+ test cases, by using 786-D Vertex AI embeddings, Firestore vector search, and a 15-candidate tag-overlap fallback.',
            'Automated a 6-stage activity lifecycle with Firebase Cloud Functions, reducing latency by ~37% and cutting redundant Firestore operations by ~45% via transactional state management, Pub/Sub, and task queues.',
        ],
    },
    {
        title: 'Software Engineering Intern',
        company: 'Art Beyond Sight',
        duration: 'June 2024 - Aug 2024',
        bullets: [
            'Increased user engagement by 21%, by implementing responsive UI components using React, TypeScript, HTML, and CSS.',
            "Updated the organization's Drupal CMS to improve website accessibility by adding WCAG-aligned alt text and descriptions.",
            'Integrated REST APIs into a React frontend to enable dynamic content updates and improve user interaction responsiveness.',
        ],
    },
];

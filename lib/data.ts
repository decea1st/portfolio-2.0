import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'FFSaraf12@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Fardin, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/Decea1st' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fardin-saraf/' },
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
        techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
        thumbnail: '/projects/thumbnail/campusvoice.png',
        longThumbnail: '/projects/long/campusvoice.png',
        images: ['/projects/images/campusvoice-1.png'],
    },
    {
        title: 'TuneAcademy',
        slug: 'tuneacademy',
        liveUrl: 'https://tuneacademy.ffsaraf12.workers.dev/',
        sourceCode: 'https://github.com/LoistCloist/brooklyn_hackathon_2026',
        year: 2026,
        description: `
      TuneAcademy is an AI-powered music education platform that matches students with instructors based on skill gaps identified through audio analysis. Students record themselves playing, get a focused weakness profile, and find teachers who specialize in exactly what they need to sharpen. Winner of the Prenora Dynamics sponsored track at Brooklyn Hacks. <br/><br/>

      Key Features:
      <ul>
        <li>AI audio assessment of pitch accuracy, rhythm consistency, and tone quality across voice, guitar, piano, and saxophone</li>
        <li>Structured, human-readable weakness reports generated from each recording</li>
        <li>Instructor matching that surfaces teachers specializing in the student's identified weaknesses</li>
        <li>Riffs: a short-form feed where musicians share progress and get discovered</li>
        <li>1-on-1 and group lesson booking with instructor profiles and ratings</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Built with a hackathon team at Brooklyn Hacks 2026. I built the FastAPI audio pipeline using Essentia and NumPy to extract pitch, rhythm, and tone quality from recordings, and compared user performance against MIDI references with DTW alignment to score timing, missed notes, and weaknesses.
      `,
        techStack: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'FastAPI',
            'Python',
            'Essentia',
            'Firestore',
        ],
        thumbnail: '/projects/thumbnail/tuneacademy.png',
        longThumbnail: '/projects/long/tuneacademy.png',
        images: [
            '/projects/images/tuneacademy-1.png',
            '/projects/images/tuneacademy-2.png',
        ],
    },
    {
        title: 'LLM Text Editor',
        slug: 'llm-text-editor',
        liveUrl: 'https://llm-text-editor.onrender.com/',
        sourceCode: 'https://github.com/decea1st/LLM-Based-Text-Editor',
        year: 2024,
        description: `
      A web app for grammar correction powered by a large language model. Users submit text, review highlighted corrections as an inline diff, and refine the result, with a token-based economy and collaborative editing built on top. <br/><br/>

      Key Features:
      <ul>
        <li>LLM grammar correction with Mistral, shown as an editable inline diff before accepting</li>
        <li>Three user tiers: free (short texts), paid (tokens, downloads, history, collaboration), and super users (moderation)</li>
        <li>Collaborative editing where paid users share documents and work toward an agreed-upon version</li>
        <li>Complaints system resolved by super users with token penalties</li>
        <li>Prompt injection prevention via input sanitization and system prompt masking</li>
      </ul>
      `,
        role: `
      Developer <br/>
      Built as a software engineering course project, later cleaned up and deployed. I built the Streamlit app with a custom bidirectional React component for the editable diff view, the PostgreSQL-backed account, token, and moderation systems, and the Mistral API integration.
      `,
        techStack: ['Python', 'Streamlit', 'React', 'PostgreSQL', 'Mistral'],
        thumbnail: '/projects/thumbnail/llm-text-editor.png',
        longThumbnail: '/projects/long/llm-text-editor.png',
        images: ['/projects/images/llm-text-editor-1.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Platform Engineer Intern',
        company: 'Prenora Dynamics',
        duration: 'June 2026 - Current',
        bullets: [
            "Building the core platform for Jamory, Prenora Dynamics' flagship product for making music more accessible and giving musicians greater financial independence, using Next.js, Node.js, PostgreSQL.",
            'Designing the REST API layer, booking & payments flow to enable users to schedule appointments and process payments.',
        ],
    },
    {
        title: 'Full Stack Engineer',
        company: 'Clustr',
        duration: 'Aug 2025 - June 2026',
        bullets: [
            'Engineered a 6-state collaborative activity pipeline in Firebase Cloud Functions using Firestore transactions, Pub/Sub, and task queues to automate invite resolution, timed activity start/end transitions, and milestone progression.',
            'Built a semantic intro-matching pipeline, achieving 95%+ match reliability across 500+ test cases, by using 766-D Vertex AI embeddings, Firestore vector search, and a 15-candidate tag-overlap fallback.',
            'Automated a 6-stage activity lifecycle with Firebase Cloud Functions, reducing latency by ~37% and cutting redundant Firestore operations by ~45% via transactional state management, Pub/Sub, and task queues.',
        ],
    },
    {
        title: 'Software Engineer Intern',
        company: 'Art Beyond Sight',
        duration: 'June 2024 - Aug 2024',
        bullets: [
            'Increased user engagement by 21% by implementing UI components using React, TypeScript, HTML, and CSS.',
            "Improved the site's Lighthouse accessibility score from 75 to 90 by adding WCAG-aligned alt text and descriptions across 30 pages in the organization's Drupal CMS.",
            'Eliminated multi-day, engineer-dependent content releases by integrating 3 REST endpoints from the Drupal JSON:API into a React frontend, enabling instant self-serve content updates.',
        ],
    },
];

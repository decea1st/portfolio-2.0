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
            icon: '/logo/css.svg',
        },
        {
            name: 'HTML',
            icon: '/logo/html.svg',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.svg',
        },
        {
            name: 'Java',
            icon: '/logo/java.svg',
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
            iconOnLight: '/logo/next-on-light.png',
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
            iconOnLight: '/logo/aws-on-light.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
            iconOnLight: '/logo/docker-on-light.svg',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
            iconOnLight: '/logo/github-on-light.png',
        },
        {
            name: 'Claude',
            icon: '/logo/claude.svg',
        },
        {
            name: 'Cursor',
            icon: '/logo/cursor.svg',
            iconOnLight: '/logo/cursor-on-light.svg',
        },
        {
            name: 'Codex',
            icon: '/logo/codex.svg',
            iconOnLight: '/logo/codex-on-light.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Clustr',
        slug: 'clustr',
        liveUrl:
            'https://play.google.com/store/apps/details?id=com.justin.nudge',
        year: 2026,
        description: `
      Clustr is a social productivity app for iOS and Android built around accountability through other people. Instead of tracking goals alone, users join shared goals with friends, schedule activities together, and keep each other on track through chat, calls, and check-ins. The Android app is now available on the Google Play Store.

      <h4>Key Features</h4>
      <ul>
        <li>Shared goals with progress tracking, attendance, and a feed of friends' activities</li>
        <li>Group scheduling with a drag-to-select calendar that shows everyone's busy times and flags conflicts</li>
        <li>Real-time chat with replies, reactions, photos, and GIFs, plus in-app voice calls</li>
        <li>Live map showing where friends are during an activity</li>
        <li>Push notifications for invites, reminders, and messages, with inline replies on Android</li>
      </ul>
      `,
        role: `
      <h3>Full-Stack Mobile Developer</h3>
      I joined this early-stage startup in August 2025 and built the group scheduling calendar, much of the chat experience, the push notification system, and the interactive onboarding tutorial. That work spanned the React Native (Expo) app and the Firebase backend (Cloud Functions, Firestore, Realtime Database), and I also handled Android release builds.
      `,
        techStack: [
            'React Native',
            'Expo',
            'TypeScript',
            'Firebase',
            'Node.js',
            'Kotlin',
            'Agora',
            'Reanimated',
        ],
        thumbnail: '/projects/thumbnail/clustr-app.png',
        longThumbnail: '/projects/thumbnail/clustr-app.png',
        images: [
            '/projects/images/clustr-app-1.png',
            '/projects/images/clustr-app-2.png',
            '/projects/images/clustr-app-3.png',
        ],
        mobileScreenshots: true,
    },
    {
        title: 'Clustr Website',
        slug: 'clustr-website',
        liveUrl: 'https://clustrgoals.com/',
        year: 2026,
        description: `
      Clustr is a landing page for a social accountability app that helps people find others with similar goals and commit to those goals together. The design uses a clean white layout, direct hero messaging, warm orange accents, and a lightweight product-card visual to explain the concept quickly.

      <h4>Key Features</h4>
      <ul>
        <li>Responsive landing page focused on clear product positioning and waitlist conversion</li>
        <li>Minimal navigation and high-contrast call-to-action treatment for quick scanning</li>
        <li>Product-style profile card mockup to make the app concept feel concrete</li>
        <li>Polished spacing, typography, and visual hierarchy designed for a startup launch page</li>
      </ul>
      `,
        role: `
      <h3>Designer and Developer</h3>
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
      Outbreak.io is a live public health surveillance dashboard for New York City. Users can track reported symptoms on an interactive map, explore COVID-19, influenza, and RSV trends from official NYC health data, and submit their own anonymous reports.

      <h4>Key Features</h4>
      <ul>
        <li>Interactive map of user-reported symptoms across NYC with filtering</li>
        <li>Public analytics dashboard with report volume, condition breakdowns, and surveillance trends</li>
        <li>Anonymous symptom reporting with automatic expiration and ML-based condition classification</li>
        <li>Optional accounts with JWT authentication and admin moderation tools</li>
        <li>Automated weekly ingestion of NYC Department of Health data via GitHub Actions</li>
      </ul>
      `,
        role: `
      <h3>Full-Stack Developer</h3>
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
      CampusVoice is a community-driven platform where students can raise issues, share feedback, and work together to improve campus life. Students submit and browse campus issues, discuss them, and track their status as they move toward resolution.

      <h4>Key Features</h4>
      <ul>
        <li>Issue reporting and browsing with community discussion around each report</li>
        <li>Student accounts with profiles for submitting and following issues</li>
        <li>Supabase backend with a PostgreSQL schema and file storage for attachments</li>
        <li>Fast Vite-powered React frontend written in TypeScript</li>
      </ul>
      `,
        role: `
      <h3>Full-Stack Developer</h3>
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
      TuneAcademy is an AI-powered music education platform that matches students with instructors based on skill gaps identified through audio analysis. Students record themselves playing, get a focused weakness profile, and find teachers who specialize in exactly what they need to sharpen. Winner of the Prenora Dynamics sponsored track at Brooklyn Hacks.

      <h4>Key Features</h4>
      <ul>
        <li>AI audio assessment of pitch accuracy, rhythm consistency, and tone quality across voice, guitar, piano, and saxophone</li>
        <li>Structured, human-readable weakness reports generated from each recording</li>
        <li>Instructor matching that surfaces teachers specializing in the student's identified weaknesses</li>
        <li>Riffs: a short-form feed where musicians share progress and get discovered</li>
        <li>1-on-1 and group lesson booking with instructor profiles and ratings</li>
      </ul>
      `,
        role: `
      <h3>Full-Stack Developer</h3>
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
      A web app for grammar correction powered by a large language model. Users submit text, review highlighted corrections as an inline diff, and refine the result, with a token-based economy and collaborative editing built on top.

      <h4>Key Features</h4>
      <ul>
        <li>LLM grammar correction with Mistral, shown as an editable inline diff before accepting</li>
        <li>Three user tiers: free (short texts), paid (tokens, downloads, history, collaboration), and super users (moderation)</li>
        <li>Collaborative editing where paid users share documents and work toward an agreed-upon version</li>
        <li>Complaints system resolved by super users with token penalties</li>
        <li>Prompt injection prevention via input sanitization and system prompt masking</li>
      </ul>
      `,
        role: `
      <h3>Developer</h3>
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

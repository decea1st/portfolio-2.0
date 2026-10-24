export type Variant = 'primary' | 'secondary';

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    images: string[];
    // Tall phone captures: shown side by side instead of full width
    mobileScreenshots?: boolean;
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}

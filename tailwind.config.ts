import type { Config } from 'tailwindcss';

export default {
    // `dark:` classes apply while the dark theme class is on <html>
    darkMode: ['selector', '.theme-dark-purple'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    light: 'hsl(var(--background-light))',
                },
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    foreground: 'hsl(var(--muted-foreground))',
                },
                border: 'hsl(var(--border))',
                shade: 'hsl(var(--shade))',
                'icon-tile': 'hsl(var(--icon-tile))',
            },
            fontFamily: {
                anton: ['var(--font-anton)'],
                'roboto-flex': ['var(--font-roboto-flex)'],
            },
            container: {
                center: true,
                padding: '1.25rem',
                screens: {
                    xl: '1200px',
                    '2xl': '1200px',
                },
            },
        },
    },
} satisfies Config;

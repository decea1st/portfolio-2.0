'use client';
import TransitionLink from '@/components/TransitionLink';
import { PROJECTS } from '@/lib/data';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDE_INTERVAL = 3000;

// Everything that differs between the left and right arrow
const NAV_ARROWS = {
    prev: {
        label: 'Previous project',
        Icon: ChevronLeft,
        side: 'left-0',
        glow: 'bg-gradient-to-r',
        nudge: 'group-hover/nav:-translate-x-1',
    },
    next: {
        label: 'Next project',
        Icon: ChevronRight,
        side: 'right-0',
        glow: 'bg-gradient-to-l',
        nudge: 'group-hover/nav:translate-x-1',
    },
} as const;

interface NavArrowProps {
    direction: keyof typeof NAV_ARROWS;
    onClick: () => void;
}

const NavArrow = ({ direction, onClick }: NavArrowProps) => {
    const { label, Icon, side, glow, nudge } = NAV_ARROWS[direction];

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className={`group/nav absolute inset-y-0 ${side} z-[2] flex w-[10%] items-center justify-center text-white outline-none`}
        >
            {/* Edge glow that fades in toward the center on hover */}
            <span
                className={`absolute inset-0 ${glow} from-primary/35 to-transparent opacity-0 transition-opacity duration-300 group-hover/nav:opacity-100 group-focus-visible/nav:opacity-100`}
            />
            <Icon
                size={28}
                className={`relative drop-shadow-md transition-transform duration-300 ${nudge}`}
            />
        </button>
    );
};

const HeroSlideshow = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Re-armed on every slide change so manual navigation resets the timer
    useEffect(() => {
        if (isPaused || PROJECTS.length < 2) return;

        const id = setTimeout(
            () => setIndex((i) => (i + 1) % PROJECTS.length),
            SLIDE_INTERVAL,
        );
        return () => clearTimeout(id);
    }, [index, isPaused]);

    const goTo = (step: number) =>
        setIndex((i) => (i + step + PROJECTS.length) % PROJECTS.length);

    const active = PROJECTS[index];

    return (
        <div
            className="hud-panel group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Full-panel link sits under the nav buttons so they stay clickable */}
            <TransitionLink
                href={`/projects/${active.slug}`}
                className="absolute inset-0 z-[1]"
                aria-label={`View project: ${active.title}`}
            />

            <div className="flex items-center justify-between border-b border-primary/15 px-5 py-3">
                <p className="hud-kicker">My Projects</p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {(index + 1).toString().padStart(2, '0')} /{' '}
                    {PROJECTS.length.toString().padStart(2, '0')}
                </p>
            </div>

            <div className="relative aspect-video overflow-hidden bg-shade/30">
                {PROJECTS.map((project, i) => (
                    <Image
                        key={project.slug}
                        src={project.thumbnail}
                        alt={`${project.title} preview`}
                        width="720"
                        height="405"
                        priority={i === 0}
                        className={`absolute inset-0 h-full w-full object-cover object-top saturate-[0.85] transition-opacity duration-700 ${
                            i === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,hsl(var(--background-light)/0.75))]" />

                {PROJECTS.length > 1 && (
                    <>
                        <NavArrow direction="prev" onClick={() => goTo(-1)} />
                        <NavArrow direction="next" onClick={() => goTo(1)} />
                    </>
                )}
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                    <p className="hud-kicker">{active.year}</p>
                    <h3 className="mt-1 font-anton text-2xl leading-none text-foreground transition group-hover:text-primary">
                        {active.title}
                    </h3>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center border border-primary/30 bg-background/70 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight size={18} />
                </div>
            </div>

            <div className="flex gap-1.5 px-5 pb-4">
                {PROJECTS.map((project, i) => (
                    <span
                        key={project.slug}
                        className={`h-1 flex-1 transition-colors duration-500 ${
                            i === index ? 'bg-primary' : 'bg-primary/15'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlideshow;

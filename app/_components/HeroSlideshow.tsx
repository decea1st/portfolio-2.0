'use client';
import TransitionLink from '@/components/TransitionLink';
import { PROJECTS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SLIDE_INTERVAL = 3000;

const HeroSlideshow = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused || PROJECTS.length < 2) return;

        const id = setInterval(
            () => setIndex((i) => (i + 1) % PROJECTS.length),
            SLIDE_INTERVAL,
        );
        return () => clearInterval(id);
    }, [isPaused]);

    const active = PROJECTS[index];

    return (
        <TransitionLink
            href={`/projects/${active.slug}`}
            className="hud-panel group block"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label={`View project: ${active.title}`}
        >
            <div className="flex items-center justify-between border-b border-primary/15 px-5 py-3">
                <p className="hud-kicker">My Projects</p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {(index + 1).toString().padStart(2, '0')} /{' '}
                    {PROJECTS.length.toString().padStart(2, '0')}
                </p>
            </div>

            <div className="relative aspect-video overflow-hidden bg-black/30">
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
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(2,8,13,0.75))]" />
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                    <p className="hud-kicker">{active.year}</p>
                    <h3 className="mt-1 font-anton text-2xl leading-none text-foreground transition group-hover:text-primary">
                        {active.title}
                    </h3>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center border border-primary/30 bg-black/50 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
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
        </TransitionLink>
    );
};

export default HeroSlideshow;

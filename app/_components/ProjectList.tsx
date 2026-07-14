'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEP_DEGREES = 360 / PROJECTS.length;
const RADIUS = 460;
const PERSPECTIVE = 1800;
const ANIM_DURATION = 0.9;
const INACTIVE_OPACITY = 0.35;
const INACTIVE_SCALE = 0.88;

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const rigRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const rotationRef = useRef(0);
    const isAnimatingRef = useRef(false);
    const isInViewRef = useRef(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            isInViewRef.current = entry.isIntersecting;
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useGSAP(
        () => {
            cardRefs.current.forEach((card, i) => {
                if (!card) return;
                const angle = i * STEP_DEGREES;
                const rad = (angle * Math.PI) / 180;
                gsap.set(card, {
                    xPercent: -50,
                    yPercent: -50,
                    x: Math.sin(rad) * RADIUS,
                    z: Math.cos(rad) * RADIUS,
                    rotateY: 0,
                    scale: i === 0 ? 1 : INACTIVE_SCALE,
                    opacity: i === 0 ? 1 : INACTIVE_OPACITY,
                    transformOrigin: '50% 50%',
                });
            });

            gsap.from(carouselRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
                y: 40,
                autoAlpha: 0,
                duration: 0.7,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    const goTo = useCallback(
        (newIndex: number) => {
            if (isAnimatingRef.current || newIndex === currentIndex) return;

            const n = PROJECTS.length;
            let stepDiff = newIndex - currentIndex;
            if (stepDiff > n / 2) stepDiff -= n;
            if (stepDiff < -n / 2) stepDiff += n;

            const targetRotation =
                rotationRef.current - stepDiff * STEP_DEGREES;

            isAnimatingRef.current = true;
            setCurrentIndex(newIndex);

            gsap.to(rigRef.current, {
                rotateY: targetRotation,
                duration: ANIM_DURATION,
                ease: 'power3.out',
                onUpdate: () => {
                    const current = gsap.getProperty(
                        rigRef.current,
                        'rotateY',
                    ) as number;
                    cardRefs.current.forEach((card) => {
                        if (card) gsap.set(card, { rotateY: -current });
                    });
                },
                onComplete: () => {
                    rotationRef.current = targetRotation;
                    isAnimatingRef.current = false;
                },
            });

            cardRefs.current.forEach((card, i) => {
                if (!card) return;
                const isActive = i === newIndex;
                gsap.to(card, {
                    opacity: isActive ? 1 : INACTIVE_OPACITY,
                    scale: isActive ? 1 : INACTIVE_SCALE,
                    duration: ANIM_DURATION,
                    ease: 'power3.out',
                });
            });
        },
        [currentIndex],
    );

    const next = useCallback(
        () => goTo((currentIndex + 1) % PROJECTS.length),
        [currentIndex, goTo],
    );

    const prev = useCallback(
        () => goTo((currentIndex - 1 + PROJECTS.length) % PROJECTS.length),
        [currentIndex, goTo],
    );

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!isInViewRef.current) return;
            if (e.key === 'ArrowLeft') {
                prev();
            } else if (e.key === 'ArrowRight') {
                next();
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [next, prev]);

    return (
        <section
            className="flex min-h-[calc(100svh-4.5rem)] scroll-mt-[4.5rem] items-center"
            id="selected-projects"
        >
            <div className="container py-8 md:py-10" ref={containerRef}>
                <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <SectionTitle title="Selected Projects" className="mb-0" />
                    <p className="max-w-[430px] text-sm leading-6 text-muted-foreground">
                        Each project opens into a focused detail page with
                        context, stack details, role notes, and screenshots.
                    </p>
                </div>

                <div ref={carouselRef} className="relative">
                    <div
                        className="relative mx-auto h-[580px] w-full overflow-hidden"
                        style={{
                            perspective: `${PERSPECTIVE}px`,
                            perspectiveOrigin: '50% 30%',
                        }}
                    >
                        <div
                            ref={rigRef}
                            className="relative h-full w-full"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {PROJECTS.map((project, i) => (
                                <div
                                    key={project.slug}
                                    ref={(el) => {
                                        cardRefs.current[i] = el;
                                    }}
                                    className="absolute left-1/2 top-1/2 w-[min(88vw,420px)]"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        pointerEvents:
                                            i === currentIndex
                                                ? 'auto'
                                                : 'none',
                                    }}
                                >
                                    <Project
                                        index={i}
                                        project={project}
                                        isActive={i === currentIndex}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {PROJECTS.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Previous project"
                                className="absolute left-2 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center border border-primary/30 bg-black/70 text-primary transition hover:bg-primary hover:text-primary-foreground md:left-4"
                            >
                                <ChevronLeft size={22} />
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                aria-label="Next project"
                                className="absolute right-2 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center border border-primary/30 bg-black/70 text-primary transition hover:bg-primary hover:text-primary-foreground md:right-4"
                            >
                                <ChevronRight size={22} />
                            </button>

                            <div className="mt-6 flex items-center justify-center gap-2.5">
                                {PROJECTS.map((project, i) => (
                                    <button
                                        type="button"
                                        key={project.slug}
                                        onClick={() => goTo(i)}
                                        aria-label={`Show ${project.title}`}
                                        aria-current={
                                            i === currentIndex
                                                ? 'true'
                                                : undefined
                                        }
                                        className={`h-2 border border-primary/30 transition-all ${
                                            i === currentIndex
                                                ? 'w-8 bg-primary'
                                                : 'w-2 bg-primary/20 hover:bg-primary/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;

'use client';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import HeroSlideshow from './HeroSlideshow';

gsap.registerPlugin(useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.hero-reveal', {
                y: 32,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            className="relative overflow-hidden"
            id="banner"
            ref={containerRef}
        >
            <div className="container grid min-h-[calc(100svh-4.5rem)] items-center gap-10 pb-32 pt-8 md:pb-40 md:pt-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative z-[1]">
                    <p className="hero-reveal hud-kicker mb-5">
                        Portfolio / Full-Stack Developer
                    </p>

                    <h1 className="hero-reveal max-w-[740px] font-anton text-[clamp(3.6rem,6vw,8rem)] leading-[0.86] text-glow">
                        FULLSTACK
                        <span className="block text-primary">DEVELOPER</span>
                    </h1>

                    <p className="hero-reveal mt-7 max-w-[610px] text-xl leading-8 text-muted-foreground">
                        I am a full-stack developer who loves designing clean
                        frontend experiences and building scalable backend
                        database systems.
                        <br />I build web apps and mobile apps with React,
                        Next.js, and React Native.
                    </p>

                    <div className="hero-reveal mt-9 flex flex-wrap gap-4">
                        <Button as="link" href="#selected-projects">
                            View Projects
                        </Button>
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}`}
                            variant="secondary"
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>

                <div className="hero-reveal relative mx-auto w-full max-w-[560px] max-lg:hidden">
                    <HeroSlideshow />
                </div>
            </div>
        </section>
    );
};

export default Banner;

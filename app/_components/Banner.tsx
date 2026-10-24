'use client';
import Button from '@/components/Button';
import { CONTACT_MAILTO, GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import HeroSlideshow from './HeroSlideshow';

gsap.registerPlugin(useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [emailCopied, setEmailCopied] = React.useState(false);
    const copiedTimerRef = React.useRef<ReturnType<typeof setTimeout>>();

    // Also copy the address: mailto: does nothing for visitors without an email app set up.
    // The click isn't prevented, so the email app still opens for everyone else.
    const handleContactClick = () => {
        navigator.clipboard
            ?.writeText(GENERAL_INFO.email)
            .then(() => {
                setEmailCopied(true);
                clearTimeout(copiedTimerRef.current);
                copiedTimerRef.current = setTimeout(
                    () => setEmailCopied(false),
                    2500,
                );
            })
            .catch(() => {});
    };

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
                            href={CONTACT_MAILTO}
                            variant="secondary"
                            onClick={handleContactClick}
                        >
                            <span aria-live="polite">
                                {emailCopied ? 'Email Copied' : 'Contact Me'}
                            </span>
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

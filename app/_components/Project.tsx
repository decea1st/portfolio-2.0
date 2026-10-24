import TransitionLink from '@/components/TransitionLink';
import { cn } from '@/lib/utils';
import { IProject } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Props {
    index: number;
    project: IProject;
    isActive?: boolean;
}

const Project = ({ index, project, isActive = false }: Props) => {
    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item hud-panel group block overflow-hidden"
        >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-primary/20 bg-shade/30 lg:aspect-[16/7]">
                <Image
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    width="720"
                    height="450"
                    className={cn(
                        'h-full w-full object-cover object-top saturate-[0.75] transition duration-700 group-hover:scale-105 group-hover:saturate-100',
                        // Dimming only reads as depth on a dark background; on a light one it washes the screenshot out
                        isActive
                            ? 'dark:opacity-60'
                            : 'dark:opacity-70 dark:group-hover:opacity-100',
                    )}
                    loading="lazy"
                />

                {isActive && (
                    <>
                        <div
                            className="pointer-events-none absolute inset-0 mix-blend-screen"
                            style={{
                                background:
                                    'linear-gradient(180deg, hsl(var(--primary) / 0.18) 0%, hsl(var(--secondary) / 0.22) 100%)',
                                opacity: 'var(--scanline-opacity)',
                            }}
                        />
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    'repeating-linear-gradient(0deg, hsl(var(--primary) / 0.22) 0px, hsl(var(--primary) / 0.22) 1px, transparent 1px, transparent 4px)',
                                opacity: 'calc(0.7 * var(--scanline-opacity))',
                            }}
                        />
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    'repeating-linear-gradient(90deg, hsl(var(--primary) / 0.10) 0px, hsl(var(--primary) / 0.10) 1px, transparent 1px, transparent 6px)',
                                opacity: 'calc(0.4 * var(--scanline-opacity))',
                            }}
                        />
                    </>
                )}

                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,hsl(var(--background-light)/0.8))]" />
                <div className="absolute left-4 top-4 hud-readout text-primary">
                    SYS-{(index + 1).toString().padStart(2, '0')}
                </div>
                <div className="absolute right-4 top-4 flex size-10 items-center justify-center border border-primary/30 bg-background/70 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight size={18} />
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="hud-kicker">{project.year}</p>
                        <h4 className="mt-2 font-anton text-3xl leading-none text-foreground transition group-hover:text-primary">
                            {project.title}
                        </h4>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            className="border border-primary/15 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground"
                            key={tech}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;

import Link from 'next/link';
import React, { ComponentProps, ReactNode } from 'react';
import { Variant } from '@/types';
import { cn } from '@/lib/utils';

type Props = {
    children: ReactNode;
    className?: string;
    variant?: Variant;
} & ComponentProps<typeof Link>;

const VARIANT_CLASSES: Record<Variant, string> = {
    primary: `border border-primary/45 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.08)] hover:bg-primary hover:text-primary-foreground`,
    secondary: `border border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground`,
};

const Button = ({ variant = 'primary', className, children, ...rest }: Props) => (
    <Link
        className={cn(
            `group h-12 px-8 inline-flex justify-center items-center gap-2 text-sm uppercase font-anton tracking-[0.22em] outline-none transition-colors relative overflow-hidden`,
            VARIANT_CLASSES[variant],
            className,
        )}
        {...rest}
    >
        {/* Light sweep on hover */}
        <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/35 opacity-0 transition-all duration-500 group-hover:left-full group-hover:opacity-100"></span>
        <span className="z-[1]">{children}</span>
    </Link>
);

export default Button;

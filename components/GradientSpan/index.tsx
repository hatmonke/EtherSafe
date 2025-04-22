type GradientSpanProps = {
    children: React.ReactNode;
    className?: string;
    from?: string;
    via?: string;
    to?: string;
    inverse?: boolean;
}


export default function GradientSpan({
    children,
    className,
    from,
    via,
    to,
    inverse,
}: GradientSpanProps) {
    return (
        <span
            className={`text-transparent bg-clip-text animate-gradient-y
            ${inverse ? "bg-gradient-to-l" : "bg-gradient-to-t"}
            ${from ? `from-${from}` : "from-text"}
            ${via ? `via-${via}` : "via-secondary"}
            ${to ? `to-${to}` : "to-primary"} 
            ${className && className}`}
        >
            {children}
        </span>
    );
}
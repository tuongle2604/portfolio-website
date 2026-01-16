"use client";

interface PatternProps {
  variant: "grid" | "noise" | "topography" | "blueprint";
  isHovered: boolean;
}

// Grid pattern with stroke reveal animation
export function GridPattern() {
  return (
    <div className="absolute -right-16 -bottom-16 w-48 h-48 opacity-15 transition-opacity duration-300">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate-slow">
        <g stroke="currentColor" strokeWidth="0.5">
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              <line x1={i * 10} y1="0" x2={i * 10} y2="100" />
              <line x1="0" y1={i * 10} x2="100" y2={i * 10} />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export function RadialPattern() {
  return (
    <div className="absolute -top-16 -right-16 w-56 h-56 opacity-30 transition-opacity duration-300">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-float">
        <defs>
          <radialGradient id="radial-grad">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={10 + i * 8}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity={1 - i * 0.15}
          />
        ))}
        <circle cx="50" cy="50" r="20" fill="url(#radial-grad)" opacity="0.4" />
      </svg>
    </div>
  );
}

// Blueprint dotted lines with staggered fade-in
export function BlueprintPattern() {
  return (
    <svg
      className="absolute top-0 left-0"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(100, 150, 200, 0.15)"
            strokeWidth="0.5"
          />
          <circle cx="0" cy="0" r="1.5" fill="rgba(100, 150, 200, 0.25)" />
          <circle cx="40" cy="0" r="1" fill="rgba(100, 150, 200, 0.15)" />
          <circle cx="0" cy="40" r="1" fill="rgba(100, 150, 200, 0.15)" />
        </pattern>
      </defs>

      <rect width="400" height="300" fill="url(#grid)" />

      {/* Animated scan line - uses transform instead of y attribute */}
      <g className="grid-scanline">
        <line
          x1="0"
          y1="150"
          x2="400"
          y2="150"
          stroke="rgba(100, 150, 200, 0.3)"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

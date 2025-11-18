"use client";

import React from 'react';

// This interface defines the simple props we pass to the standard <img> tag.
interface CyberImageProps {
    src: string;
    alt: string;
    className: string;
}

export default function CyberImage({ src, alt, className }: CyberImageProps) {
  // The 'return' statement must be properly closed with parentheses.
  // The function must be properly closed with a curly brace.
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      // Set static dimensions to prevent layout shifts.
      width={600} 
      height={400}
    />
  );
}

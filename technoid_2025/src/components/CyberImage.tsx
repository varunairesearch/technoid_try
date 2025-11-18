"use client";

import React from 'react';

interface CyberImageProps {
    src: string;
    alt: string;
    className: string;
}

export default function CyberImage({ src, alt, className }: CyberImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}

    />
  );
}

import React from 'react';

// Crisp German Flag SVG (DE)
export const FlagDE = ({ width = 20, height = 14, style = {} }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 640 480"
    style={{ borderRadius: '2px', objectFit: 'cover', display: 'inline-block', verticalAlign: 'middle', ...style }}
  >
    <rect width="640" height="160" y="0" fill="#000000" />
    <rect width="640" height="160" y="160" fill="#DD0000" />
    <rect width="640" height="160" y="320" fill="#FFCC00" />
  </svg>
);

// Crisp UK / English Flag SVG (EN - Union Jack)
export const FlagEN = ({ width = 20, height = 14, style = {} }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 60 30"
    style={{ borderRadius: '2px', objectFit: 'cover', display: 'inline-block', verticalAlign: 'middle', ...style }}
  >
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 m-30,0 l60,30 v-30 l-60,30 z h60 v-30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 l60,30 M60,0 l-60,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 l60,30 M60,0 l-60,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

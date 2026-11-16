import React from 'react';

interface NvkEmblemProps {
  className?: string;
}

export const NvkEmblem: React.FC<NvkEmblemProps> = ({className = 'w-6 h-6'}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 5L16 2L28 5V16.5C28 23.2 22.8 28.4 16 30C9.2 28.4 4 23.2 4 16.5V5Z"
        fill="#0D162B"
        stroke="#2563EB"
        strokeWidth="1.75"
      />
      <path
        d="M9.5 21V11L14.5 18.5V11M17.5 11L20.5 21L23.5 11"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

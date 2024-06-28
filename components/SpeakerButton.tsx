// SpeakerButton.jsx
import React from 'react';
import { Volume2 } from 'react-feather';

interface SpeakerButtonProps {
  onClick: () => void;
}

const SpeakerButton = ({ onClick }: SpeakerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-right justify-right p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-75"
    >
      <Volume2 className="w-6 h-6" />
    </button>
  );
};

export default SpeakerButton;

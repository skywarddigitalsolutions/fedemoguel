import React from 'react';
import HyperText from '../ui/magic/HyperTextProps';

interface SubtitleSectionsProps {
  title: string;
  Icon?: React.ElementType; 
}

const SubtitleSections = ({ title, Icon }: SubtitleSectionsProps) => {
  return (
    <div className="flex items-center text-sm font-semibold mb-2">
      <HyperText
        className="text-sm font-bold text-blanco"
        text={title}
        duration={0.5}
        />
      {Icon && <Icon className="text-rojo mx-2" />}
    </div>
  );
};

export default SubtitleSections;

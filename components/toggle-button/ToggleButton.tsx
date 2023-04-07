import cn from 'classnames';
import React from 'react';

interface ToggleButtonProps {
  classNames?: string;
  children: string;
  onClick: () => void;
  isActive: boolean;
}

const ToggleButton = ({ children, classNames, onClick, isActive }: ToggleButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn({
        'border-[1px] p-4 py-2 rounded-full': true,
        'bg-white text-black': isActive,
        [classNames ?? '']: true,
      })}
    >
      {children}
    </button>
  );
};

export default ToggleButton;

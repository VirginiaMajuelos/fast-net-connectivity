// Button.tsx
import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  to?: string;  
  variant?: 'primary' | 'secondary' | 'outline' | 'picker' | 'pickerSelect'; 
  size?: 'small' | 'medium' | 'large';
  isSelected?: boolean; 
}

export const Button: React.FC<ButtonProps> = ({
  as: Component = 'button',
  children,
  variant = 'primary',
  size = 'medium',
  isSelected = false,  
  className = '',
  ...props
}) => {
  const buttonClasses = `
  ${styles.button} 
  ${styles[variant]} 
  ${styles[size]} 
  ${className} 
  ${variant === 'picker' && isSelected ? styles.pickerSelect : ''} 
  ${variant === 'picker' && !isSelected ? styles.picker : ''}
`.trim();


  return (
    <Component className={buttonClasses} {...props}>
      {children}
    </Component>
  );
};

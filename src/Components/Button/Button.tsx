import { ReactNode } from 'react';
// import clsx from 'clsx'; 
import { Icon } from '../Icon';
import { iconList } from '../_export-helpers';
import styles from './Button.module.scss';


/**
 * TODO:
 * Performance optimization for:
 * - Rendering
 * - Algorythm
 * - Accessibility
 */


/**
 * RULES
 * ------------
 * 1) <Icon /> component is optional, but is rendered automatically if as === 'icon button' 
 * 
 */
const Button = ({ 
  children, 
  icon, 
  className = '', 
  variant = 'primary', 
  block = false,
  as = 'button',
  size = 'medium'
}: ButtonProps) => {

  const blockClass              = block ? styles.block : ''; // Assign block class if button is a block
  const btnIconTransformClass   = as === 'icon button' ? styles.btnIcon : '';
  let btnVariantClass           = '';
  let btnSizeClass              = '';

  switch(variant) { // Compute the right variant styling
    case 'primary': btnVariantClass = styles.primary; break;
    case 'secondary': btnVariantClass = styles.secondary; break;
    case 'tertiary': btnVariantClass = styles.tertiary; break;
  }

  switch(size) {  // Compute the right size styling
    case 'small': btnSizeClass = styles.small; break;
    case 'medium': btnSizeClass = styles.medium; break;
    case 'large': btnSizeClass = styles.large; break;
  }

  // Combine all classes into 1
  const btnClassName = `btn 
                        ${blockClass} 
                        ${btnVariantClass} 
                        ${btnSizeClass} 
                        ${btnIconTransformClass} 
                        ${className}`;  

  return (
    <button className={btnClassName}>
      {children}
      {(icon || as === 'icon button') && <Icon name={icon} />}
    </button>
  );
};

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  block?: boolean; 
  as?: 'button' | 'icon button';
  icon?: keyof typeof iconList;
  size?: 'small' | 'medium' | 'large';  
};

export default Button;
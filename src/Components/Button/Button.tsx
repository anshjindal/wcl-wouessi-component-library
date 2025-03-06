import { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';


/**
 * TODO:
 * Performance optimization for:
 * - Rendering
 * - Algorythm
 * - Accessibility
 */
const Button = ({ 
  children, 
  icon, 
  className = '', 
  variant = 'primary', 
  block = false 
}: ButtonProps) => {

  let btnVariantClass = '';

  switch(variant) {
    case 'primary': btnVariantClass = styles.primary; break;
    case 'secondary': btnVariantClass = styles.secondary; break;
    case 'tertiary': btnVariantClass = styles.tertiary; break;
  }


  const blockClass = block ? styles.block : '';            // Assign block class if button is a block
  const btnClassName = `btn ${blockClass} ${btnVariantClass} ${className}`;  // Combine all classes into 1

  return (
    <button className={clsx(styles.btn, btnClassName, variant === 'primary' && styles.primary)}>
      {icon && <span className={styles.icon}>{icon}</span>} {/* Render icon as a ReactNode */}
      {children}
    </button>
  );
};

export type ButtonProps = {
  children: ReactNode;
  className?: string,
  variant?: 'primary' | 'secondary' | 'tertiary',
  block?: boolean
  icon?: ReactNode; //  Icon is now a ReactNode, so it can accept strings or React elements
};

export default Button;

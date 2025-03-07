import React, { JSX, ReactNode } from 'react';
import styles from './Heading.module.scss';
import clsx from 'clsx';


/**
 * TODO:
 * Performance optimization for:
 * - Rendering
 * - Algorythm
 * - Accessibility
 */
export type HeadingProps = {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

const Heading = ({ children, className, level = 1 }: HeadingProps) => {
  const Tag = level === 7 ? 'p' : (`h${level}` as keyof JSX.IntrinsicElements);
  const headingClassName = clsx(
    styles.heading,
    className,
    level === 7 ? styles.h7 : styles[`h${level}`]
  );
  
  
  return <Tag className={headingClassName}>{children}</Tag>;
};

export default Heading;

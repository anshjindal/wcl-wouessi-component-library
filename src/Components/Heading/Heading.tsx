import React, { JSX, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Heading.module.scss';

/**
 * The Heading component is highly versatile and can be used as a <b>heading (h1–h6)</b>,
 * or as a <b>paragraph</b> if <code>level=7</code>.
 *
 * @param {object} props - Props for the Heading component.
 * @param {ReactNode} props.children - Text or elements to display in the heading.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {1 | 2 | 3 | 4 | 5 | 6 | 7} [props.level=1] - Determines if we render <code>h1</code>–<code>h6</code> or a <code>p</code> tag.
 */
const Heading = ({
  children,
  className,
  level = 1,
}: HeadingProps) => {
  // If level is 7, use <p>; otherwise use h1-h6
  const Tag = level === 7 ? 'p' : (`h${level}` as keyof JSX.IntrinsicElements);

  const headingClassName = clsx(
    styles.heading,
    className,
    level === 7 ? styles.h7 : styles[`h${level}`]
  );

  return <Tag className={headingClassName}>{children}</Tag>;
};

export type HeadingProps = {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export default Heading;

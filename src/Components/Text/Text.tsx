import styles from './Text.module.scss'; 
import { ReactNode } from 'react';
import clsx from "clsx";

/**
 * The Text component supports three body variants: Body/B-1, Body/B-2, and Body/B-3.
 * Use the `variant` prop to switch between them.
 *
 * @param {TextProps} props - The properties for the Text component.
 * @param {ReactNode} props.children - The text content to display.
 * @param {"body1" | "body2" | "body3"} [props.variant="body1"] - The body style to apply.
 * @param {string} [props.className] - Optional additional CSS classes for custom styling.
 */


const Text = ({ children, variant = 'body1', className }: TextProps) => {
  const textClassName = clsx(styles.text, styles[variant], className);
  return <p className={textClassName}>{children}</p>;
};

export type TextProps = {
  children: ReactNode;
  variant?: 'body1' | 'body2' | 'body3';
  className?: string;
};

export default Text;

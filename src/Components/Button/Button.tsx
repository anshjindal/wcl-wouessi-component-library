import { ReactNode } from "react";
import clsx from "clsx";
import { Icon } from "../Icon";
import { iconList } from "../_export-helpers";
import styles from "./Button.module.scss";

/**
 * TODO:
 * Performance optimization for:
 * - Rendering
 * - Algorythm
 * - Accessibility
 */

/**
 * The Button component is highly versatile and can be used as a <b>button</b>, a <b>button icon</b>, or a <b>link</b>.
 *
 */
const Button = ({
  children,
  hasIcon,
  className = "",
  variant = "primary",
  isBlock = false,
  as = "button",
  size = "medium",
  href,
  label,
}: ButtonProps) => {
  const blockClass = isBlock ? styles.block : ""; // Assign block class if button is a block
  const btnIconTransformClass = as === "icon button" ? styles.btnIcon : "";
  let btnVariantClass = "";
  let btnSizeClass = "";

  switch (
    variant // Compute the right variant styling
  ) {
    case "primary":
      btnVariantClass = styles.primary;
      break;
    case "secondary":
      btnVariantClass = styles.secondary;
      break;
    case "tertiary":
      btnVariantClass = styles.tertiary;
      break;
  }

  switch (
    size // Compute the right size styling
  ) {
    case "small":
      btnSizeClass = styles.small;
      break;
    case "medium":
      btnSizeClass = styles.medium;
      break;
    case "large":
      btnSizeClass = styles.large;
      break;
  }

  // Rendering a link
  if (as === "link") {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  } else {
    // Rendering a button
    // Combine button classes
    const btnClassName = `btn 
                          ${btnVariantClass} 
                          ${btnSizeClass} 
                          ${className}`;

    // Rendering a button icon
    if (as === "icon button") {
      return (
        <button
          className={clsx(btnClassName, btnIconTransformClass)}
          aria-label={label}
        >
          <Icon name={hasIcon} aria-hidden="true" />
        </button>
      );
    }

    // Rendering a button
    else {
      return (
        <button className={clsx(btnClassName, blockClass)}>
          {children}
          {hasIcon && <Icon name={hasIcon} />}
        </button>
      );
    }
  }
};

export type ButtonProps = {
  children: ReactNode;
  className?: string;

  /** Component's visual appearance by order of importance */
  variant?: "primary" | "secondary" | "tertiary";

  /** The component can be rendered as the following DOM elements: */
  as?: "button" | "icon button" | "link";

  /** In case the component is a "button" or a "button icon", it can have the following sizes: */
  size?: "small" | "medium" | "large";

  /** For button icon only: Gives buttons a meaningful name for screen readers.  */
  label?: string,

  isBlock?: boolean;
  hasIcon?: keyof typeof iconList;
  href?: string; // String for links
};

export default Button;

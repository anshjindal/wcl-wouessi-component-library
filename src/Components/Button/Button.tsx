import { ReactNode } from "react";
import clsx from "clsx";
import { Icon } from "../Icon";
import { iconList } from "../_export-helpers";
import styles from "./Button.module.scss";

/**
 * The Button component is highly versatile and can be used as a <b>button</b>, a <b>button icon</b>, or a <b>link</b>.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @param {ReactNode} props.children - The content of the button.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {"primary" | "secondary" | "tertiary"} [props.variant="primary"] - Visual style of the button.
 * @param {"button" | "icon button" | "link"} [props.as="button"] - Determines the HTML element to render.
 * @param {"small" | "medium" | "large"} [props.size="medium"] - Size of the button.
 * @param {string} [props.label] - Accessible label for icon buttons.
 * @param {boolean} [props.isBlock=false] - If true, the button will take up the full width of its container.
 * @param {keyof typeof iconList} [props.hasIcon] - The icon to display in the button (for icon buttons).
 * @param {string} [props.href] - URL for the link (when rendered as a link).
 *
 * @example
 * <Button variant="primary" size="medium">Click Me</Button>
 *
 * @remarks
 * Pending performance optimizations include improvements in rendering efficiency and algorithm refinement.
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
  disabled = false,
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
      <a href={href} className={clsx("btn", btnVariantClass, btnSizeClass, className)}
      >
        {children}
      </a>
    );
  } else {
    // Rendering a button
    // Combine button classes including variant, size, and any additional classes
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
          disabled={disabled} 
        >
          <Icon name={hasIcon} aria-hidden="true" />
        </button>
      );
    }

    // Rendering a regular button with an optional icon
    else {
      return (
        <button className={clsx(btnClassName, blockClass)}
        disabled={disabled} 
        >
          {children}
          {hasIcon && <Icon name={hasIcon} />}
        </button>
      );
    }
  }
};

export type ButtonProps = {
  children?: ReactNode;
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

  disabled?: boolean;
};

export default Button;

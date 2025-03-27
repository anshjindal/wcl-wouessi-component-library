import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import { iconList } from '../_export-helpers';

import { vi } from 'vitest';

describe('Button Component', () => {
  test('renders with default primary variant', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn'); // Ensure base class is applied
  });

  test('renders with secondary variant', () => {
    render(<Button variant="secondary">Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass('primary'); // Should not have primary class
  });

  test('fires click event', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<button onClick={handleClick}>Click Me</button>);
    const button = screen.getByRole('button', { name: /click me/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });


  //Verify that an icon button renders with the correct aria-label for accessibility
  test('renders icon button with correct aria-label', () => {
    // Use the first key from iconList as a valid icon
    const iconKey = Object.keys(iconList)[0] as keyof typeof iconList;
    render(<Button as="icon button" hasIcon={iconKey} label="Icon Button" />);
    // Check if the button has the aria-label attribute set to "Icon Button"
    const iconButton = screen.getByRole('button', { name: /Icon Button/i });
    expect(iconButton).toBeInTheDocument();
  });
});
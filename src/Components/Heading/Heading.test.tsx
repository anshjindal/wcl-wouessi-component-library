import { render, screen } from '@testing-library/react';
import Heading from './Heading';
import styles from './Heading.module.scss';


describe('Heading Component', () => {
  test('renders H1 tag when level is 1', () => {
    render(<Heading level={1}>Primary Heading</Heading>);
    const heading = screen.getByText(/Primary Heading/i);
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveClass(styles.h1); 
  });
  test('renders H2 tag when level is 2', () => {
    render(<Heading level={2}>Secondary Heading</Heading>);
    const heading = screen.getByText(/Secondary Heading/i);
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass(styles.h2); 
  });
  test('renders p tag with H7 class when level is 7', () => {
    render(<Heading level={7}>Seventh Heading</Heading>);
    const heading = screen.getByText(/Seventh Heading/i);
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('P');
    expect(heading).toHaveClass(styles.h7); 
  });
  
});

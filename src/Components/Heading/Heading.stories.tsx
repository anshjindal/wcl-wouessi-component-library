import type { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from "./Heading.tsx";

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {control: 'text'},
    level: {
      control: 'radio',
      options: [1, 2, 3, 4, 5, 6, 7],
      description: 'Heading level.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>

export const H1: Story = {
  args: {
    children: 'Heading 1', level: 1
  }
};
export const H2: Story = {
  args: {
    children: 'Heading 2', level: 2
  }
};
export const H3: Story = {
  args: {
    children: 'Heading 3', level: 3
  }
};
export const H4: Story = {
  args: {
    children: 'Heading 4', level: 4
  }
};
export const H5: Story = {
  args: {
    children: 'Heading 5', level: 5
  }
};
export const H6: Story = {
  args: {
    children: 'Heading 6', level: 6
  }
};
export const H7: Story = {
  args: {
    children: 'Heading 7', level: 7
  }
};

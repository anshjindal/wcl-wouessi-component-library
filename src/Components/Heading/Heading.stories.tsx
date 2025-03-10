import type { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from "./Heading.tsx";

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {control: 'text'},
    level: {
      control:'select',
      options: [1, 2, 3, 4, 5, 6, 7],
      description: 'Heading level.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Heading', level: 1
  }
};

import { Meta, StoryFn } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'The Text component supports three body variants (Body/B-1, Body/B-2, Body/B-3). Use the dropdown in the controls to switch between them.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content to display',
    },
    variant: {
      control: 'select', 
      options: ['body1', 'body2', 'body3'], 
      description: 'Select one of the three body variants',
    },
    className: {
      control: 'text',
      description: 'Optional CSS class for additional styling',
    },
  },
} as Meta;


const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'body1', 
  children: 'This is some sample text.',
};

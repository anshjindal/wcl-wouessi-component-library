import Text, { TextProps } from './Text.tsx';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => (
    <Text {...args}>{args.children}</Text>
  );

export const Default = Template.bind({});

Default.args = {
  children: 'This is some text inside a paragraph.',
};
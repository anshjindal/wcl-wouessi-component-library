import type { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from "./Button";
import { iconList } from "../_export-helpers"; 
// const ExampleIcon = () => <span role="img" aria-label="star">⭐</span>;


export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { 
      control: 'radio', 
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Defines the visual style of the button. `primary` is the default action, `secondary` is a less prominent action, and `tertiary` is for subtle actions.',
      table: {
        type: { summary: 'primary | secondary | tertiary' }, // Shows in Docs table
        defaultValue: { summary: 'primary' }, // Shows default value in Docs
      },
    },
    hasIcon: { control: 'object' }, 
    href: {
      control: "text",
      description: "URL for the link (only used when as='link')",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    isBlock: {
      control: "boolean",
      defaultValue: false,
      description: "---- isBlock description ----",
      table: {
        type: { summary: "boolean" }, // Add type summary for documentation
        defaultValue: { summary: "false" }, // Optional: Show default value
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

//Button Story
export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  children: "Commit without compromise",
  variant: "primary",
  size: 'medium',
  isBlock: false,
};

// Button Icon Story
export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  as: 'icon button',
  hasIcon: Object.keys(iconList)[0] as keyof typeof iconList, 
};

ButtonIcon.argTypes = {
  hasIcon: {
    control: { type: 'select' },
    options: Object.keys(iconList) as (keyof typeof iconList)[], 
  },
  children: { table: { disable: true } },
  variant: { table: { disable: true } }, 
  size: { table: { disable: true } }, 
  isBlock: { table: { disable: true } }, 
};

// Link Button Story
export const LinkButton = Template.bind({});
LinkButton.args = {
  children: "Test Link",
  as: "link",
  href: "https://www.google.com", 
  className: "custom-link-class", 
};

// export const ButtonWithIcon: Story = {
//   args: {
//     children: 'Button with Icon',
//     variant: 'primary',
//     icon: <ExampleIcon />, 
//   },
// };


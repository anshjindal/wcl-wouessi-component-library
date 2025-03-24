import type { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";
import { iconOptions } from "../_export-helpers";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "select" },
      options: iconOptions,
      description: "Name of the icon to render.",
      table: {
        type: {
          summary: "IconName",
          detail: "One of the predefined keys in your shared icon library (e.g., 'ChatsTeardrop', 'Lightning').",
        },
        defaultValue: { summary: "ChatsTeardrop" },
      },
    },
    size: {
      control: { type: "number", min: 8, max: 100 },
      description: "Pixel size of the icon.",
      table: {
        type: {
          summary: "number",
          detail: "Recommended range: 8–100. Sets width and height equally.",
        },
        defaultValue: { summary: "24" },
      },
    },
    color: {
      control: "color",
      description: "Color of the icon.",
      table: {
        type: {
          summary: "string",
          detail: "Any valid CSS color value (e.g., '#000', 'red', 'rgb(0,0,0)').",
        },
        defaultValue: { summary: "#000" },
      },
    },
    className: {
      control: "text",
      description: "Custom CSS class names for styling.",
      table: {
        type: {
          summary: "string",
          detail: "Useful for adding utility classes (e.g., 'text-blue-500', 'rotate-45').",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    "aria-label": {
      control: "text",
      description: "Accessible label for screen readers.",
      table: {
        type: {
          summary: "string",
          detail: "Adds semantic meaning for assistive technologies when icon conveys information.",
        },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `Icon` component is used to render icons from a shared icon library. Supports custom size, color, and accessibility options.",
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

// Default icon story
export const IconDefault = Template.bind({});
IconDefault.args = {
  name: "ChatsTeardrop",
  size: 24,
  color: "#000",
};

export const LargeIcon = Template.bind({});
LargeIcon.args = {
  name: "Megaphone",
  size: 64,
  color: "#facc15",
};



export const IconWithCustomClass = Template.bind({});
IconWithCustomClass.args = {
  name: "CaretCircleRight",
  size: 32,
  className: "text-green-500 hover:scale-110 transition-transform",
};

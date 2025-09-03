import { Meta, StoryObj } from "@storybook/react";
import RectLoader from "./index";

export default {
  title: "Atoms/RectLoader",
  component: RectLoader,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      description: "가로폭",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "320" },
      },
    },
    height: {
      control: { type: "number" },
      description: "세로폭",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "320" },
      },
    },
  },
} as Meta<typeof RectLoader>;

type Story = StoryObj<typeof RectLoader>;

export const Normal: Story = {
  args: {
    width: 320,
    height: 320,
  },
  render: (args) => <RectLoader {...args} />,
};

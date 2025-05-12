import { Meta, StoryObj } from "@storybook/react";
import RectLoader from "./index";

export default {
  title: "Atoms/RectLoader",
  component: RectLoader,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "세로폭",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
  },
} as Meta<typeof RectLoader>;

type Story = StoryObj<typeof RectLoader>;

export const Normal: Story = {
  render: (args) => <RectLoader {...args} />,
};

import { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";

export default {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
    content: {
      control: { type: "text" },
      description: "배지 테스트",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배지 색상",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const orange: Story = {
  args: {
    content: "1",
    backgroundColor: "#ed9f28",
  },
};

export const green: Story = {
  args: { content: "2", backgroundColor: "#32bf00" },
};

export const red: Story = {
  args: {
    content: "10",
    backgroundColor: "#d4001a",
  },
};

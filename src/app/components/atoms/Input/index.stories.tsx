import { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

export default {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Input Box",
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "플레이스홀더",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "Input Box",
        },
      },
    },
    hasBorder: {
      control: { type: "boolean" },
      description: "보더 플래그",
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "true",
        },
      },
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "배리에이션 에러 플래그",
      table: {
        type: { summary: "boolean" },
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Normal: Story = {
  args: {
    hasError: false,
  },
};

export const Error: Story = {
  args: { hasError: true },
};

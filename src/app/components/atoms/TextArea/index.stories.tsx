import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./index";

export default {
  title: "Atoms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "플레이스홀더",
      table: {
        type: { summary: "string" },
      },
    },
    rows: {
      control: { type: "number" },
      description: "행 수",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
    },
    minRows: {
      control: { type: "number" },

      description: "최소 행 수",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
    },
    maxRows: {
      control: { type: "number" },

      description: "최대 행 수",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "10" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      description: "변형 에러 플래그",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      description: "onChange 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const normal: Story = {
  args: {
    hasError: false,
  },
};

export const Error: Story = {
  args: {
    hasError: true,
  },
};

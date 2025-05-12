import { Meta, StoryObj } from "@storybook/react";
import ScaleImage from "./index";

export default {
  title: "Atoms/ScaleImage",
  component: ScaleImage,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: { type: "text" },
      description: "이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "이미지 가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "이미지 세로폭",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
    containerWidth: {
      control: { type: "number" },
      defaultValue: 320,
      description: "가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    conatinerHeight: {
      control: { type: "number" },
      description: "세로폭",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
  },
} as Meta<typeof ScaleImage>;

type Story = StoryObj<typeof ScaleImage>;

export const Normal: Story = {
  args: { src: "/images/sample/1.jpg" },
  render: (args) => <ScaleImage {...args} />,
};

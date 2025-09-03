import { Meta, StoryObj } from "@storybook/react";
import ShapeImage from "./index";

export default {
  title: "Atoms/ShapeImage",
  component: ShapeImage,
  tags: ["autodocs"],
  args: {
    shape: "circle",
    width: 320,
    height: 320,
    alt: "샘플 이미지",
  },
  argTypes: {
    shape: {
      options: ["circle", "square"],
      control: { type: "radio" },
      description: "이미지 형태",
      table: {
        type: { summary: "circle | square" },
        defaultValue: { summary: "square" },
      },
    },
    src: {
      control: { type: "text" },
      description: "이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
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
} as Meta<typeof ShapeImage>;

type Story = StoryObj<typeof ShapeImage>;

export const circle: Story = {
  args: {
    src: "/images/sample/1.jpg",
    shape: "circle",
    alt: "샘플 이미지",
  },
};

export const square: Story = {
  args: {
    src: "/images/sample/1.jpg",
    shape: "square",
    alt: "샘플 이미지",
  },
};

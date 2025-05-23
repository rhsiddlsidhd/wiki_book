import { Meta, StoryObj } from "@storybook/react";
import Text from "./index";

export default {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "extraSmall",
        "small",
        "medium",
        "mediumLarge",
        "large",
        "extraLarge",
      ],
      control: { type: "select" },
      defaultValue: "medium",
      description: "텍스트 변형",
      table: {
        type: {
          summary:
            "extraSmall | small | medium | mediumLarge | large | extraLarge",
        },
        defaultValue: { summary: "medium" },
      },
    },
    children: {
      control: { type: "text" },
      description: "텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    fontWeight: {
      control: { type: "text" },
      description: "폰트 굵기",
      table: {
        type: { summary: "string" },
      },
    },
    lineHeight: {
      control: { type: "text" },
      description: "행 높이",
      table: {
        type: { summary: "string" },
      },
    },
    color: {
      control: { type: "color" },
      description: "텍스트 색상",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배경 색상",
      table: {
        type: { summary: "string" },
      },
    },
    m: {
      control: { type: "number" },
      description: "마진",
      table: {
        type: { summary: "number" },
      },
    },
    mt: {
      control: { type: "number" },
      description: "위쪽 마진",
      table: {
        type: { summary: "number" },
      },
    },
    mr: {
      control: { type: "number" },
      description: "오른쪽 마진",
      table: {
        type: { summary: "number" },
      },
    },
    mb: {
      control: { type: "number" },
      description: "아래쪽 마진",
      table: {
        type: { summary: "number" },
      },
    },
    ml: {
      control: { type: "number" },
      description: "왼쪽 마진",
      table: {
        type: { summary: "number" },
      },
    },
    p: {
      control: { type: "number" },
      description: "패딩",
      table: {
        type: { summary: "number" },
      },
    },
    pt: {
      control: { type: "number" },
      description: "위쪽 패딩",
      table: {
        type: { summary: "number" },
      },
    },
    pr: {
      control: { type: "number" },
      description: "오른쪽 패딩",
      table: {
        type: { summary: "number" },
      },
    },
    pb: {
      control: { type: "number" },
      description: "아래쪽 패딩",
      table: {
        type: { summary: "number" },
      },
    },
    pl: {
      control: { type: "number" },
      description: "왼쪽 패딩",
      table: {
        type: { summary: "number" },
      },
    },
  },
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

const longText = `It is a long established fact that a reader will be
distracted by the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it has a more - or - less normal
distribution of letters, as opposed to using Content here, content here,
making it look like readable English.Many desktop publishing packages and
web page editors now use Lorem Ipsum as their default model text, and a
search for lorem ipsum will uncover many web sites still in their infancy.
Various versions have evolved over the years, sometimes by accident,
sometimes on purpose(injected humour and the like).`;

export const extraSmall: Story = {
  args: {
    variant: "extraSmall",
    children: longText,
  },
};

export const small: Story = {
  args: { variant: "small", children: longText },
};

export const medium: Story = {
  args: { variant: "medium", children: longText },
};

export const mediumLarge: Story = {
  args: { variant: "mediumLarge", children: longText },
};

export const large: Story = {
  args: { variant: "large", children: longText },
};

export const extraLarge: Story = {
  args: { variant: "extraLarge", children: longText },
};

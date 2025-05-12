import { Meta, StoryObj } from "@storybook/react";
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from "./";

const meta: Meta<typeof SearchIcon> = {
  title: "Atoms/IconButton",
  component: SearchIcon,
  argTypes: {
    color: {
      control: { type: "text" },
      description: "아이콘 색상",
      table: {
        type: { summary: "ThemeColors" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배경 색상",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      control: { type: "number" },
      defaultValue: 24,
      description: "아이콘 크기",
      table: {
        type: { summary: "number" },
      },
    },
    onClick: {
      description: "onClick 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchIcon>;

export const Normal: Story = {
  render: (args) => (
    <>
      <SearchIcon {...args} />
      <CloudUploadIcon {...args} />
      <PersonOutlineIcon {...args} />
    </>
  ),
};

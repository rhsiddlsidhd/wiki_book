import { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./index";

export default {
  title: "Molecules/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "표시 라벨",
      table: {
        type: { summary: "text" },
      },
    },
    checked: {
      control: { type: "boolean" },
      description: "체크",
      table: {
        type: { summary: "number" },
      },
    },
    onChange: {
      description: "값이 변화했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as Meta<typeof CheckBox>;

type Story = StoryObj<typeof CheckBox>;

export const WithLabel: Story = {
  args: {
    label: "Label",
    checked: false,
  },
  render: (args) => <CheckBox {...args} />,
};

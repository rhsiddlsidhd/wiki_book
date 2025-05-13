import { Meta, StoryObj } from "@storybook/react";
import SigninForm from "./index";

export default {
  title: "Organisms/SigninForm",
  component: SigninForm,
  tags: ["autodocs"],
  argTypes: {
    onSignin: {
      description: "로그인 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as Meta<typeof SigninForm>;

type Story = StoryObj<typeof SigninForm>;

export const Form: Story = {
  render: (args) => <SigninForm {...args} />,
};

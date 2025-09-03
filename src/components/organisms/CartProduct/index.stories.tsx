import { Meta, StoryObj } from "@storybook/react";
import CartProduct from "./index";

export default {
  title: "Organisms/CartProduct",
  component: CartProduct,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: { type: "number" },
      description: "상품 ID",
      table: {
        type: { summary: "number" },
      },
    },
    title: {
      control: { type: "text" },
      description: "상품명",
      table: {
        type: { summary: "string" },
      },
    },
    imageUrl: {
      control: { type: "text" },
      description: "상폼 이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: { type: "number" },
      description: "상품 가격",
      table: {
        type: { summary: "number" },
      },
    },
    onBuyButtonClick: {
      description: "구입 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
    onRemoveButtonClick: {
      description: "삭제 버튼을 클릭했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as Meta<typeof CartProduct>;

type Story = StoryObj<typeof CartProduct>;

export const NiceShoes: Story = {
  args: {
    id: 1,
    imageUrl: "./images/sample/1.jpg",
    title: "멋진 신발",
    price: 32000,
  },
  render: (args) => <CartProduct {...args} />,
};

import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./index";

export default {
  title: "Organisms/ProductCard",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "상품명",
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
    imageUrl: {
      control: { type: "text" },
      description: "상품 이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    blurDataUrl: {
      control: { type: "text" },
      description: "상품의 흐릿한 이미지의 데이터 URI 스킴",
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      options: ["listing", "small", "detail"],
      control: { type: "radio" },
      defaultValue: "listing",
      description: "변경(표시 스타일)",
      table: {
        type: { summary: "listing | small | detail" },
        defaultValue: { summary: "primary" },
      },
    },
  },
} as Meta<typeof ProductCard>;

type Story = StoryObj<typeof ProductCard>;

const render = (args: React.ComponentProps<typeof ProductCard>) => {
  return <ProductCard {...args} />;
};

const basicArgs = {
  title: "멋진 신발",
  imageUrl: "/images/sample/1.jpg",
  price: 20000,
};

export const Listing: Story = {
  args: {
    ...basicArgs,
    variant: "listing",
  },
  render,
};

export const Small: Story = {
  args: {
    ...basicArgs,
    variant: "small",
  },
  render,
};

export const Detail: Story = {
  args: {
    ...basicArgs,
    variant: "detail",
  },
  render,
};

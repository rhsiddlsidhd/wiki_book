import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FilterGroup from "./index";

export default {
  title: "Molecules/FilterGroup",
  component: FilterGroup,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "제목",
      table: {
        type: { summary: "string" },
      },
    },
    items: {
      control: { type: "object" },
      description: "옵션",
      table: {
        type: { summary: "array" },
      },
    },
    onChange: {
      description: "onChange 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as Meta<typeof FilterGroup>;

const StandardDemo = (args: React.ComponentProps<typeof FilterGroup>) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (newValue: string[]) => {
    setValue(newValue);
    if (args && args.onChange) {
      args.onChange(newValue);
    }
  };

  return <FilterGroup {...args} value={value} onChange={handleChange} />;
};

type Story = StoryObj<typeof FilterGroup>;

export const Standard: Story = {
  args: {
    title: "All Categories",
    items: [
      { label: "Clothes", name: "clothes" },
      { label: "Books", name: "books" },
      { label: "Shoes", name: "shoes" },
    ],
  },

  render: (args) => <StandardDemo {...args} />,
};

import { Meta, StoryObj } from "@storybook/react";
import BadgeIconButton from "./index";
import { SearchIcon } from "../../atoms/IconButton";

export default {
  title: "Molecules/BadgeIconButton",
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "object" },
      description: "아이콘",
      table: {
        type: { summary: "object" },
      },
    },
    badgeContent: {
      control: { type: "number" },
      description: "배지 카운터",
      table: {
        type: { summary: "number" },
      },
    },
    badgeBackgroundColor: {
      control: { type: "color" },
      description: "배지 배경 색상",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta<typeof BadgeIconButton>;

type Story = StoryObj<typeof BadgeIconButton>;

const baseArgs = {
  icon: <SearchIcon size={24} />,
  badgeContent: 1,
};

const render = (args: React.ComponentProps<typeof BadgeIconButton>) => (
  <BadgeIconButton {...args} />
);

export const SearchBadgeIcon: Story = {
  args: {
    ...baseArgs,
    badgeBackgroundColor: "#ed9f28",
  },
  render,
};

export const PersonBadgeIcon: Story = {
  args: {
    ...baseArgs,
    badgeBackgroundColor: "#d4001a",
  },
  render,
};

export const ShoppingCartBadgeIcon: Story = {
  args: {
    ...baseArgs,
    badgeBackgroundColor: "#32bf00",
  },
  render,
};

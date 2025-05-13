import { Meta } from "@storybook/react";
import Breadcrumb from "./index";
import BreadcrumbItem from "../../atoms/BreadcrumbItem";

export default { title: "Molecules/Breadcrumb", tags: ["autodocs"] } as Meta<
  typeof Breadcrumb
>;

export const Standard = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">Top</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">Clothes</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Item</BreadcrumbItem>
  </Breadcrumb>
);

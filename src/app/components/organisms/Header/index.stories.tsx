import React, { useEffect } from "react";
import Header from "./index";
import { Meta } from "@storybook/react";
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from "@/app/context/ShoppingCartContext";
import { AuthContextProvider } from "@/app/context/AuthContext";

export default { title: "organisms/Header", tags: ["autodocs"] } as Meta<
  typeof Header
>;

export const NoLogin = () => <Header />;

export const Login = () => {
  const authUser = {
    id: 1,
    username: "dummy",
    displayName: "Hana Kim",
    email: "hana.kim@example.com",
    profileImageUrl: "/images/sample/1.jpg",
    description: "",
  };

  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext();

    useEffect(() => {
      addProductToCart({
        id: 1,
        category: "book",
        title: "Product",
        description: "",
        imageUrl: "/images/sample/1.jpg",
        blurDataUrl: "",
        price: "10000",
        condition: "used",
        owner: authUser,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Header />;
  };

  return (
    <ShoppingCartContextProvider>
      <AuthContextProvider
        context={{ apiRootUrl: "https://dummy" }}
        authUser={authUser}
      >
        <ChildComponent />
      </AuthContextProvider>
    </ShoppingCartContextProvider>
  );
};

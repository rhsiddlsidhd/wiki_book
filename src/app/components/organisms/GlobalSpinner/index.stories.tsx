import { Meta } from "@storybook/react";
import GlobalSpinner from "./index";
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from "@/app/context/GlobalSpinnerContext";
import Button from "../../atoms/Button";

export default {
  title: "organisms/GlobalSpinner",
  tags: ["autodocs"],
} as Meta<typeof GlobalSpinner>;

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext();
    const handleClick = () => {
      setGlobalSpinner(true);
      // 5초 후에 닫는다
      setTimeout(() => {
        setGlobalSpinner(false);
      }, 5000);
    };

    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>스피너 표시</Button>
      </>
    );
  };

  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  );
};

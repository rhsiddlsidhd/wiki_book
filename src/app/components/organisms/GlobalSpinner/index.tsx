import styled from "styled-components";
import Spinner from "../../atoms/Spinner";
import { useGlobalSpinnerContext } from "@/app/context/GlobalSpinnerContext";

const GlobalSpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;

/**
 * 글로벌 스피너
 */
const GlobalSpinner = () => {
  const isGlobalSpinnerOn = useGlobalSpinnerContext();
  return (
    <>
      {isGlobalSpinnerOn && (
        <GlobalSpinnerWrapper>
          <Spinner isAutoCentering={true} />
        </GlobalSpinnerWrapper>
      )}
    </>
  );
};

export default GlobalSpinner;

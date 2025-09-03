import { styled } from "styled-components";
import Text from "../Text";

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Anchor;

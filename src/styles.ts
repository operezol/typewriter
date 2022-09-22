import styled from "styled-components";
type KeyboardProps = {
    keyStatus:String
}
export const Keyboard = styled.div<KeyboardProps>`
  background-color: ${(props) =>
    props.keyStatus === "wrong"
      ? "red"
      : props.keyStatus === "correct"
      ? "green"
      : "grey"};
`;

import { IconContainer, InputContainer, InputText } from "./styles";
import { IInput } from "./types";

export const Input = ({ leftIcon, ...rest }: IInput) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText />
    </InputContainer>
  );
};

import { IconContainer, InputContainer, InputText } from "./styles";
import { IInput } from "./types";

export const Input = ({ leftIcon, placeholder,...rest}: IInput) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText placeholder={placeholder}/>
    </InputContainer>
  );
};

import { useNavigate } from "react-router";
import Button from "./../Button/index";
import {
  Container,
  Row,
  Column,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  UserPicture,
  Input,
} from "./styles";

export const Header = ({autenticado}) => {

  const register = useNavigate();

  const handleClickRegister = () => {
      register('/register')
  }

  const login = useNavigate();
  const handleClickLogin = () => {
      login('/login')
  }


  return (
    <Wrapper>
      <Container>
        <Row>
          <img src="dio.png" alt="Logo da DIO" />
          {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder="BuscarInputContainer" />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu> Global</Menu>
                    </>
                    ) : null}
                    
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title={"Entrar"} onClick={handleClickLogin} />
          <Button title={"Cadastrar"} onClick={handleClickRegister} />
        </Row>
      </Container>
    </Wrapper>
  );
};

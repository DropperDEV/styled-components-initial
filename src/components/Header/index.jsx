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

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src="dio.png" alt="Logo da DIO" />
          <BuscarInputContainer>
            <Input placeholder="Buscar..."/>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title={"Entrar"} />
          <Button title={"Cadastrar"} />
        </Row>
      </Container>
    </Wrapper>
  );
};

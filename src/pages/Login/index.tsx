import { MdEmail, MdLock } from "react-icons/md";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import {
  Column,
  Container,
  CreateText,
  ForgetText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { Input } from "../../components/Input/index";
import { useNavigate } from "react-router";

const Login = () => {

  
  const navigate = useNavigate();

  const handleClickLogin = () => {
      navigate('/feed')
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plantaforma para você aprender com experts, dominar as principais
            tecnologias, e entrar mais rápido nas empresas mais desejadas
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça o login</TitleLogin>
            <SubtitleLogin>Faça seu login e make the cange._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" type="email" leftIcon={<MdEmail />} />{" "}
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />{" "}
              <Button title={"Entrar"} variant="secondary" onClick={handleClickLogin} />
            </form>
            <Row>
              <ForgetText>Esqueci minha senha</ForgetText>
              <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;

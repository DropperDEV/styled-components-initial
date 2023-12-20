import { MdEmail, MdLock } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import { Header } from "../../components/Header";

import { Input } from "../../components/Input";

import { BsFillPersonFill } from "react-icons/bs";

import {
  Column,
  Container,
  FazerLogin,
  ExisteAccount,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  Policy,
} from "./styles";

const Register = () => {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <div className="titleLoginDiv">
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubtitleLogin>Crie sua conta e make the change</SubtitleLogin>
            </div>

            <form>
              <Input placeholder="Nome completo" leftIcon={<BsFillPersonFill color="#8647AD"  />} />
              <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD" />} />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock color="#8647AD"  />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                onClick={handleClickRegister}
                type="button"
              />
              <br />
              <br />
            </form>
            <Row>
              <Policy>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da Dio.
              </Policy>
              <div className="underTextLogin">
                <ExisteAccount>Já tenho conta. </ExisteAccount>
                <FazerLogin onClick={handleClickRegister}>
                  Fazer login
                </FazerLogin>
              </div>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };

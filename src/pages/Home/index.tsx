import { useNavigate } from "react-router";
import Button from "../../components/Button";
import { Header } from "../../components/Header";
import { Title, TitleHighlight, Container, TextContent } from "./styles";

const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/login')}

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight>
            <br /> o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title={"Começar agora"} variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src="banner.png" alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;

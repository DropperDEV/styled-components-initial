
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>
            # RANKING 5 TOP DA SEMANA
            <UserInfo
              nome="James Costa"
              percentual={100}
              image="https://media.licdn.com/dms/image/D4D03AQHgZ9WDYQbKiw/profile-displayphoto-shrink_800_800/0/1699826985397?e=1708560000&v=beta&t=buxKHMmE6Lt-vj3wOSzXnXLiiItmHk5gx45zwGysEPg"
            />
            <UserInfo
              nome="James Costa"
              percentual={60}
              image="https://media.licdn.com/dms/image/D4D03AQHgZ9WDYQbKiw/profile-displayphoto-shrink_800_800/0/1699826985397?e=1708560000&v=beta&t=buxKHMmE6Lt-vj3wOSzXnXLiiItmHk5gx45zwGysEPg"
            />
            <UserInfo
              nome="James Costa"
              percentual={55}
              image="https://media.licdn.com/dms/image/D4D03AQHgZ9WDYQbKiw/profile-displayphoto-shrink_800_800/0/1699826985397?e=1708560000&v=beta&t=buxKHMmE6Lt-vj3wOSzXnXLiiItmHk5gx45zwGysEPg"
            />
            <UserInfo
              nome="James Costa"
              percentual={40}
              image="https://media.licdn.com/dms/image/D4D03AQHgZ9WDYQbKiw/profile-displayphoto-shrink_800_800/0/1699826985397?e=1708560000&v=beta&t=buxKHMmE6Lt-vj3wOSzXnXLiiItmHk5gx45zwGysEPg"
            />
            <UserInfo
              nome="James Costa"
              percentual={4}
              image="https://media.licdn.com/dms/image/D4D03AQHgZ9WDYQbKiw/profile-displayphoto-shrink_800_800/0/1699826985397?e=1708560000&v=beta&t=buxKHMmE6Lt-vj3wOSzXnXLiiItmHk5gx45zwGysEPg"
            />
            <UserInfo
              nome="James Costa"
              percentual={20}
              image="https://media.licdn.com/dms/image/D4D03AQHgZ9WDYQbKiw/profile-displayphoto-shrink_800_800/0/1699826985397?e=1708560000&v=beta&t=buxKHMmE6Lt-vj3wOSzXnXLiiItmHk5gx45zwGysEPg"
            />
          </TitleHighlight>
        </Column>
      </Container>
    </>
  );
};

export { Feed };

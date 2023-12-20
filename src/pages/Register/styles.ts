import styled from "styled-components";

export const Container = styled.main`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .titleLoginDiv {
    display: flex;
    flex-direction: column;
  }
  form {
    display: flex;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  .underTextLogin {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 50%;
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffffff;
`;

export const TitleLogin = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
`;

export const SubtitleLogin = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
`;

export const Policy = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
`;

export const ExisteAccount = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`;

export const FazerLogin = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #23dd7a;
  text-align: left;
`;

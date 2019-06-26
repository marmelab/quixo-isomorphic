import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: deepskyblue;
  padding: 50px;
`;

const Button = styled.a`
  width: 150px;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  background-color: #003366;
  border-radius: 5px;
  display: inline-block;
  color: white;
  cursor: pointer;
`;

const Title = styled.h1`
  color: bisque;
`;

const Home = () => (
  <Container>
    <Title>Quixo game with React & NextJS !</Title>
    <Link href="/game">
      <Button>New Game !</Button>
    </Link>
  </Container>
);

export default Home;

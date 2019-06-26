import styled from "styled-components";

const Board = styled.div`
  text-align: center;
  width: 100%;
  height: 70%;
  background-image: url("/static/board.jpg");
  background-size: 100% 100%;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Row = styled.div`
  text-align: center;
`;

const Cube = styled.div`
  display: inline-block;
`;

const CubeImage = styled.img`
  width: 100px;
  height: 100px;
`;

const Game = ({ board }) => (
  <div>
    <Board>
      {board.map((row, x) => (
        <Row key={`row-${x}`}>
          {row.map((value, y) => (
            <Cube key={`cube-${x}-${y}`}>
              <CubeImage src={"/static/neutral.png"} />
            </Cube>
          ))}
        </Row>
      ))}
    </Board>
  </div>
);

Game.getInitialProps = async ({ req }) => {
  const mockedBoard = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  return { board: mockedBoard };
};

export default Game;

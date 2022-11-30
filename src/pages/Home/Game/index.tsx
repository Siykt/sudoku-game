import { FC } from 'react';
import * as SC from './styles';
import { Container, Graphics, Stage } from '@saitonakamura/react-pixi';

interface GameProps {}

interface BoxProps {
  x?: number;
  y?: number;
}

const Game: FC<GameProps> = () => {
  const size = 354;
  const boxSize = size / 3;
  const cardSize = (boxSize - 1) / 3;

  const Card: FC<BoxProps> = ({ x = 0, y = 0 }) => (
    <Graphics
      interactive
      draw={(g) => {
        g.clear();
        g.lineStyle(1, 0xbfc6d4, 1);
        g.beginFill(0xffffff, 1);
        g.drawRect(x, y, cardSize, cardSize);
      }}
    />
  );

  const Box: FC<BoxProps> = ({ x = 0, y = 0 }) => (
    <Container sortableChildren>
      <Graphics
        zIndex={1}
        draw={(g) => {
          g.clear();
          g.lineStyle(2, 0x344861, 1);
          g.drawRect(x, y, boxSize, boxSize);
        }}
      />
      <Container y={0}>
        <Card x={x} y={y} />
        <Card x={x + cardSize} y={y} />
        <Card x={x + 2 * cardSize} y={y} />
      </Container>
      <Container y={cardSize}>
        <Card x={x} y={y} />
        <Card x={x + cardSize} y={y} />
        <Card x={x + 2 * cardSize} y={y} />
      </Container>
      <Container y={cardSize * 2}>
        <Card x={x} y={y} />
        <Card x={x + cardSize} y={y} />
        <Card x={x + 2 * cardSize} y={y} />
      </Container>
    </Container>
  );

  return (
    <SC.GameContainer>
      <Stage width={size + 1} height={size + 1} options={{ autoDensity: true, backgroundColor: 0xeeeeee }}>
        <Container y={0}>
          <Box />
          <Box x={boxSize} />
          <Box x={boxSize * 2} />
        </Container>
        <Container y={boxSize}>
          <Box />
          <Box x={boxSize} />
          <Box x={boxSize * 2} />
        </Container>
        <Container y={boxSize * 2}>
          <Box />
          <Box x={boxSize} />
          <Box x={boxSize * 2} />
        </Container>
      </Stage>
    </SC.GameContainer>
  );
};

export default Game;

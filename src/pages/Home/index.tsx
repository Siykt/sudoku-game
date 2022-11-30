import { FC } from 'react';
import Game from './Game';
import * as SC from './styles';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <SC.HomeContainer>
      <Game />
    </SC.HomeContainer>
  );
};

export default Home;

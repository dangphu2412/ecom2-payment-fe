import { User } from './entities/user.types';
import { Portfolio } from '../../portfolio/domain/portfolio.usecase';

export type SystemStore = {
  userSession?: User;
  selectedPortfolio?: Portfolio;
};

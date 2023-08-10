import { User } from '../entities/user.types';

export type UserSession = {
  user?: User;
  sessionStatus: 'authenticated' | 'unauthenticated' | 'verifying';
};

export type UserProfile = {
  username: string;
  name: string;
};

export type UserUsecase = {
  getMyProfile: () => Promise<UserProfile>;
};

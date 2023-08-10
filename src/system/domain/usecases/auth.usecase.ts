export type LoginCredentials = {
  username: string;
  password: string;
};

export type LoginGooglePayload = {
  idToken: string;
};

export type UserCredentials = {
  accessToken: string;
};

export type AuthUseCase = {
  loginByCredentials: (
    credentials: LoginCredentials
  ) => Promise<UserCredentials>;
  registerByCredentials: (
    credentials: LoginCredentials
  ) => Promise<UserCredentials>;
  loginByGoogle: (
    loginGoogleCredentials: LoginGooglePayload
  ) => Promise<UserCredentials>;
};

type LogOutState = () => void;
export type LogOutUseCase = () => LogOutState;

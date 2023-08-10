export type LoginCredentials = {
  username: string;
  password: string;
};

export type UserCredentials = {
  access: string;
  refresh: string;
};

export type AuthUseCase = {
  loginByCredentials: (
    credentials: LoginCredentials
  ) => Promise<UserCredentials>;
  registerByCredentials: (
    credentials: LoginCredentials
  ) => Promise<UserCredentials>;
};

type LoginProps = {
  onSuccess?: (credentials: UserCredentials) => void;
  onError?: () => void;
};
type LoginState = {
  login: (payload: LoginCredentials) => void;
  isMutating: boolean;
};
export type LoginUseCase = (props: LoginProps) => LoginState;

type RegisterState = {
  register: (payload: LoginCredentials) => void;
  isMutating: boolean;
};
export type RegisterUseCase = (props: LoginProps) => RegisterState;

type LogOutState = () => void;
export type LogOutUseCase = () => LogOutState;

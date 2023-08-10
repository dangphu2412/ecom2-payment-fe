import {
  AuthUseCase,
  LoginCredentials,
  UserCredentials
} from '../../../domain/usecases/auth.usecase';
import { httpClient } from '../../../infrastructure/factories/http-client.factories';

export const authClient: AuthUseCase = {
  loginByCredentials(credentials: LoginCredentials): Promise<UserCredentials> {
    return httpClient.request({
      method: 'post',
      url: '/login/',
      data: credentials
    });
  },
  registerByCredentials: function (
    credentials: LoginCredentials
  ): Promise<UserCredentials> {
    return httpClient.request({
      method: 'post',
      url: '/register/',
      data: credentials
    });
  }
};

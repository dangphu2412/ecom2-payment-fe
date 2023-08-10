import {
  AuthUseCase,
  LoginCredentials,
  LoginGooglePayload,
  UserCredentials
} from '../../../domain/usecases/auth.usecase';
import { httpClient } from '../../../infrastructure/factories/http-client.factories';

export const authClient: AuthUseCase = {
  loginByGoogle(payload: LoginGooglePayload): Promise<UserCredentials> {
    return httpClient.request({
      method: 'post',
      url: '/login/google',
      data: payload
    });
  },
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

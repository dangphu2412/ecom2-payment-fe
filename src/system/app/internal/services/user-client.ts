import {
  UserProfile,
  UserUsecase
} from '../../../domain/usecases/user.usecase';
import { authorizedHttpClient } from '../../../infrastructure/factories/http-client.factories';

export const userClient: UserUsecase = {
  getMyProfile(): Promise<UserProfile> {
    return authorizedHttpClient.request({
      method: 'get',
      url: 'users/me/'
    });
  }
};

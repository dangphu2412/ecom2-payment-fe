import {
  CreatePortfolioPayload,
  Portfolio,
  PortfolioDetail,
  PortfolioUseCase
} from '../../../domain/portfolio.usecase';
import { authorizedHttpClient } from '../../../../system/infrastructure/factories/http-client.factories';

export const portfolioClient: PortfolioUseCase = {
  getDetail(portfolioId: number): Promise<PortfolioDetail> {
    return authorizedHttpClient.request({
      method: 'get',
      url: `/portfolios/${portfolioId}/`
    });
  },
  createOne(payload: CreatePortfolioPayload): Promise<void> {
    return authorizedHttpClient.request({
      method: 'post',
      url: '/portfolios/',
      data: payload
    });
  },
  getAll(): Promise<Portfolio[]> {
    return authorizedHttpClient.request({
      method: 'get',
      url: '/portfolios/'
    });
  },
  deleteOne: (portfolioId: number): Promise<void> => {
    return authorizedHttpClient.request({
      method: 'delete',
      url: `/portfolios/${portfolioId}`
    });
  }
};

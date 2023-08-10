import type { NextPage } from 'next';
import { Text } from '@chakra-ui/react';
import { NewsContainer } from '../src/analytics/app/internal/containers/NewsContainer/NewsContainer';

const NewsPage: NextPage = () => {
  return (
    <>
      <Text fontSize="xl" fontWeight="semibold" marginTop={4}>
        Latest News
      </Text>

      <NewsContainer />
    </>
  );
};

export default NewsPage;

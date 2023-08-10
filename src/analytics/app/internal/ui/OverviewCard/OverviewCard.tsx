import { ReactElement } from 'react';
import { Card, CardBody, Heading, Text } from '@chakra-ui/react';
import { OverviewCardProps } from './types';

export function OverviewCard({
  title,
  mainContent,
  description
}: OverviewCardProps): ReactElement {
  return (
    <Card>
      <CardBody>
        <Text fontSize="lg">{title}</Text>
        <Heading fontSize="xl">{mainContent}</Heading>
        <Text fontSize="md">{description}</Text>
      </CardBody>
    </Card>
  );
}

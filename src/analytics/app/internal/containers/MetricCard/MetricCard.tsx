import { Card, CardBody, Heading, Text } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

type MetricCardProps = {
  title: ReactNode;
  description: ReactNode;
  value: string;
};

export function MetricCard({
  title,
  description,
  value
}: MetricCardProps): ReactElement {
  return (
    <Card>
      <CardBody className="space-y-4" minHeight={'12rem'}>
        <Text fontSize="md" fontWeight="semibold">
          {title}
        </Text>

        <Text fontSize="sm" fontWeight="light">
          {description}
        </Text>

        <Heading>{value}</Heading>
      </CardBody>
    </Card>
  );
}

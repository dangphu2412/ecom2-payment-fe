import { Tag } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { SummarizeType } from '../../../../../domain/ui-models/summarize.model';

type Props = PropsWithChildren<{
  tagType: SummarizeType;
}>;

export function SummarizeTag({ tagType }: Props) {
  const typeColor = {
    positive: 'green',
    neutral: 'yellow',
    negative: 'gray',
    analyzing: 'orange'
  }[tagType];

  return (
    <Tag variant="solid" colorScheme={typeColor}>
      {tagType}
    </Tag>
  );
}

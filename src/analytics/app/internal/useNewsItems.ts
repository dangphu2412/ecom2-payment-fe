import { useMemo } from 'react';
import { SummarizeItem } from '../../../system/domain/ui-models/summarize.model';
import { useQueryNews } from './useQueryNews';

export function useNewItems(): SummarizeItem[] {
  // const [news, setNews] = useState<New[]>([]);
  // const sseRef = useRef<EventSource>();
  //
  // if (!sseRef.current) {
  //   const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/news`;
  //
  //   const eventSource = new EventSource(url, {
  //     withCredentials: true
  //   });
  //   eventSource.onmessage = (event: MessageEvent<New | New[]>) => {
  //     const data = event.data;
  //
  //     if (Array.isArray(data)) {
  //       setNews(data);
  //       return;
  //     }
  //
  //     setNews(oldNews =>
  //       oldNews.map(newItem => {
  //         if (newItem.id !== data.id) return newItem;
  //
  //         return {
  //           ...newItem,
  //           sentiment: data.sentiment
  //         };
  //       })
  //     );
  //   };
  //
  //   sseRef.current = eventSource;
  // }
  //
  // useUnmount(() => sseRef.current?.close());
  const { news } = useQueryNews();

  return useMemo(() => {
    return news.map(newItem => {
      return {
        tag: newItem.topic,
        content: newItem.content,
        type: 'analyzing',
        created: newItem.published_date
      };
    });
  }, [news]);
}

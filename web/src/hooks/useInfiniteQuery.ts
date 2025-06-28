import {
  useInfiniteQuery as useRQInfiniteQuery,
  type UseInfiniteQueryOptions,
  type UseInfiniteQueryResult,
  type InfiniteData,
} from '@tanstack/react-query';
import type { InfinitePaginationResponse } from '@/types/response';
import Http from '@/utils/http';
import { useMemo } from 'react';

type FetchInfiniteDataParams = {
  url: string;
  pageParam?: string;
  queryParams?: Record<string, string | number | boolean>;
};

// Enhanced return type that replaces 'data' with flattened array
type EnhancedUseInfiniteQueryResult<T> = Omit<UseInfiniteQueryResult<InfiniteData<InfinitePaginationResponse<T[]>>, unknown>, 'data'> & {
  data: T[];
};

// Your consumer-facing options
type UseInfiniteQueryOpts<T> = {
  url: string;
  queryParams?: Record<string, string | number | boolean>;
} & Omit<
  UseInfiniteQueryOptions<
    InfinitePaginationResponse<T[]>,
    unknown,
    InfiniteData<InfinitePaginationResponse<T[]>>,
    InfinitePaginationResponse<T[]>,
    readonly unknown[],
    string | undefined
  >,
  'queryFn' | 'initialPageParam' | 'getNextPageParam' | 'getPreviousPageParam'
>;

const fetchInfiniteData = async <T>({ url, pageParam, queryParams = {} }: FetchInfiniteDataParams) => {
  const params = new URLSearchParams();

  if (pageParam) {
    params.append('cursor', pageParam);
  }

  Object.entries(queryParams).forEach(([key, value]) => {
    params.append(key, String(value));
  });

  const fullUrl = `${url}${params.toString() ? `?${params.toString()}` : ''}`;
  return Http.get<InfinitePaginationResponse<T[]>>(fullUrl);
};

export function useInfiniteQuery<T>(
  opts: UseInfiniteQueryOpts<T>,
): EnhancedUseInfiniteQueryResult<T> {
  const { queryKey, queryParams, url, ...rest } = opts;

  const result = useRQInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchInfiniteData<T>({ url, pageParam, queryParams }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.has_more ? lastPage.next_cursor : undefined,
    getPreviousPageParam: () => undefined,
    ...rest,
  });

  // Flatten the data pages while preserving pagination
  const flattenedData = useMemo(() => {
    if (!result.data?.pages) return [];
    return result.data.pages.reduce((acc: T[], page) => {
      return [...acc, ...(page.data as T[])];
    }, [] as T[]);
  }, [result.data?.pages]);

  return {
    ...result,
    data: flattenedData,
  };
}

export default useInfiniteQuery;

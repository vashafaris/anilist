/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useCallback, useEffect, useRef } from 'react';

const useInfiniteScroll = (fetchMore: (page: number) => void) => {
  const INITIAL_PAGE = 1;
  const page = useRef(INITIAL_PAGE);
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback(
    ([entry]) => {
      if (entry?.isIntersecting) {
        fetchMore(++page.current);
      }
    },
    [fetchMore, page]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current && page.current === INITIAL_PAGE) observer.observe(loadMoreRef.current);
  }, [handleObserver]);

  return { loadMoreRef };
};

export default useInfiniteScroll;

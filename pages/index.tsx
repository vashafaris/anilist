import { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';

import Loading from '~/components/loading/Loading';
import ToggleButton from '~/components/toggle-button/ToggleButton';
import AnimeCard from '~/modules/anime-list/components/AnimeCard';
import { GET_ANIME_LIST } from '~/modules/anime-list/graphql/getAnimeList';

import useInfiniteScroll from 'hooks/useInfiniteScroll';

const Home: NextPage = () => {
  const [filteredGenre, setFilteredGenre] = useState<string[]>([]);

  const {
    data: animeListRaw,
    loading,
    fetchMore,
  } = useQuery(GET_ANIME_LIST, {
    variables: {
      page: 1,
      genre_in: filteredGenre.length > 0 ? filteredGenre : undefined,
      sort: 'TRENDING_DESC',
    },
  });

  const animeList = animeListRaw?.Page?.media;
  const genreCollection = animeListRaw?.GenreCollection;

  const handleFetchMore = useCallback(
    async (page: number) => {
      if (animeList?.length <= 1 || loading) {
        return;
      }

      const updateQuery = (previousResult: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        return {
          ...fetchMoreResult,
          Page: {
            ...fetchMoreResult?.Page,
            media: [
              ...(previousResult?.Page?.media || []),
              ...(fetchMoreResult?.Page?.media || []),
            ],
          },
        };
      };

      await fetchMore({
        updateQuery,
        variables: {
          page,
          genre_in: filteredGenre.length > 0 ? filteredGenre : undefined,
          sort: 'TRENDING_DESC',
        },
      });
    },
    [animeList?.length, fetchMore, filteredGenre, loading]
  );

  function handleSelectFilter(selectedGenre: string) {
    if (filteredGenre.includes(selectedGenre)) {
      setFilteredGenre(
        filteredGenre.filter((genreFilter: string) => genreFilter !== selectedGenre)
      );
    } else {
      setFilteredGenre([...filteredGenre, selectedGenre]);
    }
  }

  const isFilterActive = useCallback(
    (genre: string) => filteredGenre.includes(genre),
    [filteredGenre]
  );

  const { loadMoreRef } = useInfiniteScroll(handleFetchMore);

  return (
    <main className="flex flex-col min-h-screen flex-1 items-center max-w-3xl m-auto pb-8">
      {loading ? (
        <Loading classNames="my-20" />
      ) : (
        <>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4">
              {genreCollection?.length > 0 &&
                genreCollection?.map((genre: string) => (
                  <ToggleButton
                    key={genre}
                    onClick={() => handleSelectFilter(genre)}
                    isActive={isFilterActive(genre)}
                  >
                    {genre}
                  </ToggleButton>
                ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-12 gap-y-12 justify-items-center">
            {animeList?.length > 0 &&
              animeList?.map((anime: any) => (
                <AnimeCard
                  key={anime?.id}
                  id={anime?.id}
                  score={anime?.averageScore}
                  src={anime?.coverImage?.large}
                  status={anime?.status}
                  title={anime?.title?.userPreferred}
                />
              ))}
          </div>
          <div ref={loadMoreRef} />
        </>
      )}
    </main>
  );
};

export default Home;

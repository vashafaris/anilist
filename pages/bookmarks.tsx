import React from 'react';
import { useQuery } from '@apollo/client';

import Loading from '~/components/loading/Loading';
import { safeJSONParse } from '~/lib/safeJSONParse';
import AnimeCard from '~/modules/anime-list/components/AnimeCard';
import { GET_ANIME_LIST } from '~/modules/anime-list/graphql/getAnimeList';
import { LocalStorageKey } from '~/constants/localStorage';

const BookmarksPage = () => {
  const getBookmarkList = () => {
    if (typeof window !== 'undefined') {
      return safeJSONParse(localStorage.getItem(LocalStorageKey.BookmarkList));
    }

    return [];
  };

  const { data: animeListRaw, loading } = useQuery(GET_ANIME_LIST, {
    variables: {
      page: 0,
      id_in: getBookmarkList() || undefined,
    },
  });

  const animeList = animeListRaw?.Page?.media;

  return (
    <main className="flex flex-col min-h-screen flex-1 items-center max-w-3xl m-auto pb-8">
      {loading ? (
        <Loading classNames="my-20" />
      ) : (
        <div>
          {animeList?.length > 0 ? (
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
          ) : (
            <p className="my-20">No Bookmark Found!</p>
          )}
        </div>
      )}
    </main>
  );
};

export default BookmarksPage;

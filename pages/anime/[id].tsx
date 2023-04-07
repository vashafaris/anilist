import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import Loading from '~/components/loading/Loading';
import { GET_ANIME_DETAILS } from '~/modules/anime-details/graphql/getAnimeDetails';
import ToggleButton from '~/components/toggle-button/ToggleButton';
import { safeJSONParse } from '~/lib/safeJSONParse';
import { LocalStorageKey } from '~/constants/localStorage';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const { data: animeDetailsRaw, loading } = useQuery(GET_ANIME_DETAILS, {
    variables: {
      id,
    },
  });

  const animeDetails = animeDetailsRaw?.Media;

  const getCharactersName = () => {
    const characters: any[] = [];
    animeDetails?.characters?.nodes?.forEach((character: any, index: number) => {
      const CHARACTER_LIMIT = 4;
      if (index > CHARACTER_LIMIT) {
        return;
      }
      characters.push(character?.name?.userPreferred);
    });

    return characters.join(', ');
  };

  const handleBookmarkPage = () => {
    const bookmarkList = safeJSONParse(localStorage.getItem(LocalStorageKey.BookmarkList), []);

    if (bookmarkList.includes(id)) {
      localStorage.setItem(
        LocalStorageKey.BookmarkList,
        JSON.stringify([...bookmarkList.filter((bookmark: string) => bookmark !== id)])
      );
      setIsBookmarked(false);
    } else {
      localStorage.setItem(LocalStorageKey.BookmarkList, JSON.stringify([...bookmarkList, id]));
      setIsBookmarked(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const bookmarkList = safeJSONParse(localStorage.getItem(LocalStorageKey.BookmarkList) ?? '');

      if ((bookmarkList || [])?.includes(id)) {
        setIsBookmarked(true);
        return;
      }

      setIsBookmarked(false);
    }
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen items-center max-w-4xl m-auto pb-12 pt-8">
      {loading ? (
        <Loading classNames="my-20" />
      ) : (
        <>
          <div className="flex gap-12">
            <div className="shrink-0">
              {animeDetails?.coverImage?.extraLarge && (
                <Image
                  className="rounded-lg"
                  src={animeDetails?.coverImage?.extraLarge}
                  width={300}
                  height={400}
                />
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-4">
                {animeDetails?.title?.userPreferred}{' '}
                <span className="">
                  (⭐️ <span className="text-yellow-300">{animeDetails?.averageScore || '?'}</span>)
                </span>
              </h1>

              <div className="mb-2">
                <span className="font-bold">Genres</span>
                <br />
                <span className="text-sm">{animeDetails?.genres?.join(', ')}</span>
                <br />
              </div>

              <div className="mb-2">
                <span className="font-bold">Characters</span>
                <br />
                <span className="text-sm">{getCharactersName()}</span>
                <br />
              </div>

              <div className="mb-2">
                <span className="font-bold">Description</span>
                <br />
                <span className="text-sm">{animeDetails?.description}</span>
                <br />
              </div>
            </div>
          </div>

          <ToggleButton classNames="mt-8" onClick={handleBookmarkPage} isActive={isBookmarked}>
            {isBookmarked ? 'Saved ❤️' : 'Save This Page'}
          </ToggleButton>
        </>
      )}
    </div>
  );
};

export default DetailsPage;

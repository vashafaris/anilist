import { GET_ANIME_LIST } from '~/modules/anime-list/graphql/getAnimeList';

export const ANIME_LIST_MOCK = [
  {
    request: {
      query: GET_ANIME_LIST,
      variables: {
        page: 1,
        genre_in: undefined,
        sort: 'TRENDING_DESC',
      },
    },
    result: {
      data: {
        Page: {
          media: [
            {
              id: 151801,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151801-wYg28dEaJAw3.png',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Comedy', 'Fantasy'],
              title: {
                userPreferred: 'MASHLE',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 141208,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141208-On0qHKxo6P5t.png',
                __typename: 'MediaCoverImage',
              },
              genres: ['Comedy', 'Romance', 'Slice of Life'],
              title: {
                userPreferred: 'Tonikaku Kawaii Season 2',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 134131,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx134131-70vYnpBHFtHy.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Mahou Shoujo'],
              title: {
                userPreferred: 'Mahou Shoujo Magical Destroyers',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 154412,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154412-bEMQkJWOStDR.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Comedy', 'Ecchi', 'Romance'],
              title: {
                userPreferred: 'Megami no Café Terrace',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 131518,
              averageScore: 82,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131518-RU7RoUmGb2sP.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
              title: {
                userPreferred: 'Dr. STONE: NEW WORLD',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 146234,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146234-vSYvPfLwjYXX.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Comedy', 'Fantasy', 'Romance'],
              title: {
                userPreferred:
                  'Isekai One Turn Kill Nee-san: Ane Douhan no Isekai Seikatsu Hajimemashita',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 21,
              averageScore: 87,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
              title: {
                userPreferred: 'ONE PIECE',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 150075,
              averageScore: 78,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150075-c7iph443GTBd.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Adventure', 'Comedy', 'Fantasy'],
              title: {
                userPreferred: 'Kono Subarashii Sekai ni Bakuen wo!',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 160442,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx160442-NI2ajJ0F0gbp.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Comedy', 'Drama', 'Romance', 'Supernatural'],
              title: {
                userPreferred: 'Rokudou no Onna-tachi',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 128893,
              averageScore: 80,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128893-l0R0GFHplDKW.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Adventure', 'Mystery', 'Supernatural'],
              title: {
                userPreferred: 'Jigokuraku',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 150957,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150957-VFsWSLJgW9Bu.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Comedy', 'Slice of Life', 'Supernatural'],
              title: {
                userPreferred: 'Edomae Elf',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 148109,
              averageScore: 62,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx148109-cwAINDGwAHB2.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Adventure', 'Comedy', 'Ecchi', 'Fantasy'],
              title: {
                userPreferred: 'Yuusha ga Shinda!',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 151384,
              averageScore: 90,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151384-gv0q8wOE6D58.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Comedy', 'Psychological', 'Romance', 'Slice of Life'],
              title: {
                userPreferred: 'Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai',
                __typename: 'MediaTitle',
              },
              status: 'FINISHED',
              __typename: 'Media',
            },
            {
              id: 136430,
              averageScore: 86,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx136430-f8Iza5GEynRW.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Adventure', 'Drama'],
              title: {
                userPreferred: 'VINLAND SAGA SEASON 2',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 155070,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx155070-OtFDdBlXX4zI.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Comedy', 'Sci-Fi'],
              title: {
                userPreferred: 'Kawaisugi Crisis',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 154965,
              averageScore: 74,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154965-vZbBRjtmLp7S.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Comedy', 'Drama', 'Romance'],
              title: {
                userPreferred: 'Yamada-kun to Lv999 no Koi wo Suru',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 151606,
              averageScore: null,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151606-337AshscgEwy.png',
                __typename: 'MediaCoverImage',
              },
              genres: ['Sports'],
              title: {
                userPreferred: "BIRDIE WING: Golf Girls' Story Season 2",
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 137822,
              averageScore: 82,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx137822-4dVWMSHLpGf8.png',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Drama', 'Sports'],
              title: {
                userPreferred: 'Blue Lock',
                __typename: 'MediaTitle',
              },
              status: 'FINISHED',
              __typename: 'Media',
            },
            {
              id: 148048,
              averageScore: 65,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx148048-IaEk51Wtu07L.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Comedy', 'Drama', 'Ecchi', 'Fantasy'],
              title: {
                userPreferred: 'Kaminaki Sekai no Kamisama Katsudou',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 153845,
              averageScore: 71,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx153845-C47aoKy7wf19.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Adventure', 'Fantasy', 'Romance'],
              title: {
                userPreferred:
                  'Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 139630,
              averageScore: 83,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139630-oc4l8OtJ4tRQ.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Action', 'Adventure', 'Comedy'],
              title: {
                userPreferred: 'Boku no Hero Academia 6',
                __typename: 'MediaTitle',
              },
              status: 'FINISHED',
              __typename: 'Media',
            },
            {
              id: 155783,
              averageScore: 77,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx155783-X23WQwPmI9Sh.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Adventure', 'Mystery', 'Sci-Fi', 'Thriller'],
              title: {
                userPreferred: 'Tengoku Daimakyou',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 154364,
              averageScore: 76,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154364-ZFPtr9F1sW60.png',
                __typename: 'MediaCoverImage',
              },
              genres: ['Drama', 'Fantasy', 'Romance', 'Slice of Life', 'Supernatural'],
              title: {
                userPreferred: 'Mahoutsukai no Yome SEASON 2',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
            {
              id: 141911,
              averageScore: 75,
              coverImage: {
                large:
                  'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141911-LqaNFCgfcj3M.jpg',
                __typename: 'MediaCoverImage',
              },
              genres: ['Comedy', 'Romance', 'Slice of Life'],
              title: {
                userPreferred: 'Skip to Loafer',
                __typename: 'MediaTitle',
              },
              status: 'RELEASING',
              __typename: 'Media',
            },
          ],
          __typename: 'Page',
        },
        GenreCollection: [
          'Action',
          'Adventure',
          'Comedy',
          'Drama',
          'Ecchi',
          'Fantasy',
          'Hentai',
          'Horror',
          'Mahou Shoujo',
          'Mecha',
          'Music',
          'Mystery',
          'Psychological',
          'Romance',
          'Sci-Fi',
          'Slice of Life',
          'Sports',
          'Supernatural',
          'Thriller',
        ],
      },
    },
  },
];

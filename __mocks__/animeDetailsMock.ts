import { GET_ANIME_DETAILS } from '~/modules/anime-details/graphql/getAnimeDetails';

export const ANIME_DETAILS_MOCK = [
  {
    request: {
      query: GET_ANIME_DETAILS,
      variables: {
        id: '123',
      },
    },
    result: {
      data: {
        Media: {
          id: 142838,
          averageScore: 83,
          coverImage: {
            extraLarge:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142838-ECZSqfknAqAT.jpg',
            large:
              'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142838-ECZSqfknAqAT.jpg',
            __typename: 'MediaCoverImage',
          },
          characters: {
            nodes: [
              {
                name: {
                  userPreferred: 'Loid Forger',
                  __typename: 'CharacterName',
                },
                __typename: 'Character',
              },
              {
                name: {
                  userPreferred: 'Anya Forger',
                  __typename: 'CharacterName',
                },
                __typename: 'Character',
              },
              {
                name: {
                  userPreferred: 'Yor Forger',
                  __typename: 'CharacterName',
                },
                __typename: 'Character',
              },
            ],
            __typename: 'CharacterConnection',
          },
          description:
            "The second half of <i>SPYxFAMILY</i>.\n<br><br>\nWith Anya Forger successfully enrolled at the renowned Eden Academy, Operation Strix advances to its second phase. To investigate Ostanian politician Donovan Desmond, Anya must either befriend his son Damian or collect eight Stella Stars to become an Imperial Scholar. Fortunately, Anya has already acquired her first star. In celebration, her adoptive father, Loid, decides to fulfill her wish to adopt a dog.\n<br><br>\nDuring their canine search, Loid receives new orders from his superiors, who have found that a band of Berlint University students is plotting to assassinate Westalis' Minister Brantz using bombs worn by trained dogs. While Loid tries to stop their plans, Anya stumbles upon the terrorists' base of operations. There, she befriends a kindhearted, clairvoyant dog who the family later names Bond.\n<br><br>\nAlthough the Forgers continue to lead their individual lives in secrecy, the family—with a new fluffy addition—remains united through all of the unusual obstacles thrown their way.\n<br><br>\n(Source: MAL Rewrite)",
          genres: ['Action', 'Comedy', 'Slice of Life', 'Supernatural'],
          title: {
            romaji: 'SPY×FAMILY Part 2',
            english: 'SPY x FAMILY Cour 2',
            native: 'SPY×FAMILY 第2クール',
            userPreferred: 'SPY×FAMILY Part 2',
            __typename: 'MediaTitle',
          },
          __typename: 'Media',
        },
      },
    },
  },
];

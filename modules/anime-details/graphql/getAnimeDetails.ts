import { gql } from '@apollo/client';

export const GET_ANIME_DETAILS = gql`
  query GetAnimeDetails($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      averageScore
      coverImage {
        extraLarge
        large
      }
      characters {
        nodes {
          name {
            userPreferred
          }
        }
      }
      description(asHtml: false)
      genres
      title {
        romaji
        english
        native
        userPreferred
      }
    }
  }
`;

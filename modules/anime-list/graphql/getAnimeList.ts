import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $genre_in: [String], $id_in: [Int], $sort: [MediaSort]) {
    Page(page: $page, perPage: 24) {
      media(type: ANIME, genre_in: $genre_in, id_in: $id_in, sort: $sort) {
        id
        averageScore
        coverImage {
          large
        }
        genres
        title {
          userPreferred
        }
        status
      }
    }
    GenreCollection
  }
`;

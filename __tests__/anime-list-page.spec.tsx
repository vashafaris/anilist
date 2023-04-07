import { useRouter } from 'next/router';
import { screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';

import renderFullApp from '~/lib/renderFullApp';
import AnimeListPage from '~/pages/index';
import { ANIME_LIST_MOCK } from '~/__mocks__/animeListMock';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

(useRouter as any).mockReturnValue({
  query: {},
  push: mockPush,
});

describe('Anime List Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initially render Loading when opening Anime List Page', async () => {
    renderFullApp(
      <MockedProvider mocks={ANIME_LIST_MOCK} addTypename={false}>
        <AnimeListPage />
      </MockedProvider>
    );

    const loadingText = screen.getByText('Loading...');

    await waitFor(() => {
      expect(loadingText).toBeInTheDocument();
    });
  });

  it('should navigate to details page when click on cover image', async () => {
    renderFullApp(
      <MockedProvider mocks={ANIME_LIST_MOCK} addTypename={false}>
        <AnimeListPage />
      </MockedProvider>
    );

    await waitFor(() => {
      const titleText = screen.getByText(/MASHLE/);
      expect(titleText).toBeInTheDocument();

      userEvent.click(screen.getAllByTestId('anime-card-cover-img')[0], undefined, {
        skipPointerEventsCheck: true,
      });

      expect(mockPush).toHaveBeenCalledWith('/anime/151801');
    });
  });
});

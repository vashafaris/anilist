import { useRouter } from 'next/router';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import renderFullApp from '~/lib/renderFullApp';
import DetailsPage from '~/pages/anime/[id]';
import { ANIME_DETAILS_MOCK } from '~/__mocks__/animeDetailsMock';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

(useRouter as any).mockReturnValue({
  query: {
    id: '123',
  },
});

const setItem = jest.spyOn(Storage.prototype, 'setItem');
const getItem = jest.spyOn(Storage.prototype, 'getItem');

describe('Anime Details Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initially render Loading when opening Anime Details Page', async () => {
    renderFullApp(<DetailsPage />);

    const mainText = screen.getByText('Loading...');

    await waitFor(() => {
      expect(mainText).toBeInTheDocument();
    });
  });

  it('should render page correctly', async () => {
    renderFullApp(
      <MockedProvider mocks={ANIME_DETAILS_MOCK} addTypename={false}>
        <DetailsPage />
      </MockedProvider>
    );

    await waitFor(() => {
      const titleText = screen.getByText('SPY×FAMILY Part 2');
      expect(titleText).toBeInTheDocument();
    });

    await waitFor(() => {
      const genresTitle = screen.getByText('Action, Comedy, Slice of Life, Supernatural');
      expect(genresTitle).toBeInTheDocument();
    });
  });

  it('should bookmark page correctly', async () => {
    renderFullApp(
      <MockedProvider mocks={ANIME_DETAILS_MOCK} addTypename={false}>
        <DetailsPage />
      </MockedProvider>
    );

    await waitFor(() => {
      const bookmarkButton = screen.getByText('Save This Page');
      expect(bookmarkButton).toBeInTheDocument();

      userEvent.click(bookmarkButton);

      expect(getItem).toHaveBeenCalled();
      expect(setItem).toHaveBeenCalled();
      expect(screen.getByText('Saved ❤️')).toBeInTheDocument();
    });
  });
});

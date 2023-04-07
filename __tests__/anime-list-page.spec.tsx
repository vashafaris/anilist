import { screen, waitFor } from '@testing-library/react';
import renderFullApp from '~/lib/renderFullApp';

import Home from '~/pages/index';

describe('Anime List Page', () => {
  it('should initially render Loading when opening Anime List Page', async () => {
    renderFullApp(<Home />);

    const mainText = screen.getByText('Loading...');

    await waitFor(() => {
      expect(mainText).toBeInTheDocument();
    });
  });
});

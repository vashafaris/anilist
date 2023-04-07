import 'cross-fetch/polyfill';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { render } from '@testing-library/react';
import React from 'react';

const intersectionObserverMock = () => ({
  observe: () => null,
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

const renderFullApp = (TestedComponent: React.ReactNode) => {
  const apolloClient = new ApolloClient({
    uri: 'https://example.com',
    cache: new InMemoryCache(),
  });

  return render(<ApolloProvider client={apolloClient}>{TestedComponent}</ApolloProvider>);
};

export default renderFullApp;

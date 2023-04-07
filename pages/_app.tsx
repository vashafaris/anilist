import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'nprogress/nprogress.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from '~/components/header/Header';

import '../styles/globals.css';

const Nprogress = dynamic(
  () => {
    return import('~/components/nprogress');
  },
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aniflix</title>
        <meta name="description" content="Aniflix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nprogress />
      <ApolloProvider client={apolloClient}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

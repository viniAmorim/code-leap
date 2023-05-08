import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { UsernameProvider } from "../src/hooks/useUsername";

import { Alert } from '@site/uikit';

import { Provider, useStore } from "react-redux";

import { store } from '../redux/store';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '~/themes/theme.json';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #__next {
    height: 100%;
    background: #f8f8f8;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastProvider components={{ Toast: Alert }}>
          <Head>
            <title>CodeLeap Network</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
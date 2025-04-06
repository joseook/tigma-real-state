import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tigma Real Estate - Find your dream property with our curated listings of homes, apartments, and commercial spaces for sale and rent." />
        <meta name="keywords" content="real estate, property, home, apartment, rent, buy, sale, tigma real estate" />
        <meta name="author" content="Tigma Real Estate" />
        
        <meta property="og:title" content="Tigma Real Estate" />
        <meta property="og:description" content="Find your dream property with our curated listings" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tigma-real-estate.com" />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />

        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
        
        <title>Tigma Real Estate</title>
      </Head>

      <style jsx global>{`
        /* Custom NProgress styling */
        #nprogress .bar {
          background: var(--chakra-colors-brand-primary) !important;
          height: 3px;
        }
        
        #nprogress .peg {
          box-shadow: 0 0 10px var(--chakra-colors-brand-primary), 0 0 5px var(--chakra-colors-brand-primary);
        }
        
        #nprogress .spinner-icon {
          border-top-color: var(--chakra-colors-brand-primary);
          border-left-color: var(--chakra-colors-brand-primary);
        }
        
        /* Fix for Avatar size fluctuations */
        .chakra-avatar.property-agency-logo {
          width: 48px !important;
          height: 48px !important;
          min-width: 48px !important;
          min-height: 48px !important;
          max-width: 48px !important;
          max-height: 48px !important;
          flex-shrink: 0 !important;
          box-sizing: border-box !important;
        }
        
        .chakra-avatar.property-agency-logo img,
        .chakra-avatar.property-agency-logo svg {
          width: 48px !important;
          height: 48px !important;
          object-fit: cover !important;
        }
      `}</style>
      
      <ChakraProvider theme={theme}>
        <ColorModeProvider options={{
          initialColorMode: 'light',
          useSystemColorMode: false,
        }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

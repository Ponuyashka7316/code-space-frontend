import '../utils/wdyr'
import type { ReactElement, ReactNode } from 'react'
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import { createEmotionCache } from '../src/createEmotionCache';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { NextPage } from 'next';
// Client-side cache, shared for the whole session of the user in the browser.
//NProgress.configure({ trickle: false });
NProgress.configure({ showSpinner: false });
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps & AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Change title in _app.tsx</title>
        <meta name="viewport" content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  )
}


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
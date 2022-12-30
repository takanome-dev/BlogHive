import { type AppType } from 'next/app';

// TODO: remove eslint-disable-next-line and fix the issue with import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import '@/styles/global.css';

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => (
  <Component {...pageProps} />
);

export default MyApp;

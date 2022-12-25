import { type AppType } from 'next/app';

import '@/styles/global.css';

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => (
    <Component {...pageProps} />
);

export default MyApp

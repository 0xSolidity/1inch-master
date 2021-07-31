import { AppProps } from 'next/app';
import '../styles/index.css';
import '../styles/custom.css';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(CustomApp);

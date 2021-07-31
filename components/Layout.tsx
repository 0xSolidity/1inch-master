import Head from 'next/head';
import Header from './headers/Header';
import Footer from './footers/Footer';
import Content from './Content';
import { useState } from 'preact/hooks';
import ThemeContextProvider from './../contexts/ThemeContext';

interface LayoutProps {
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle = '1inch - DeFi / DEX aggregator on Ethereum, Polygon and Binance',
  children,
}) => {
  const [theme] = useState<string>('dark');

  return (
    <>
      <div className='relative'>
        <Head>
          <title>{pageTitle}</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
          />
        </Head>

        <ThemeContextProvider value={theme}>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </ThemeContextProvider>
      </div>
    </>
  );
};

export default Layout;

// favicon logo https://app.1inch.io/assets/favicon/favicon-32x32.png
// mobile logo https://app.1inch.io/assets/images/logo_small.svg
// desktop logo https://app.1inch.io/assets/images/logo.svg
// footer logo https://app.1inch.io/assets/images/footer-logo.svg

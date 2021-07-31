import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import DaoDropDown from './DaoDropdown';
import MoreDropdown from './MoreDropdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SettingDropdown from './SettingDropdown';

const Header = () => {
  const { t } = useTranslation('nav');

  return (
    <div className='mb-8 max1inchMd:mb-0'>
      <div className='py-4'>
        {/* container */}
        <div className='max-w-1400  mx-auto px-4'>
          <div className='flex items-center justify-between border-box'>
            {/* left */}
            <div className='flex items-center border-box'>
              <Link href='/'>
                <a className='mr-12 logo1200:mr-8 logo800:mr-0 text-white'>
                  <svg width='132' height='50' className='logo800:hidden'>
                    <use xlinkHref='/images/1inchLogo.svg#logo' />
                  </svg>
                  <svg width='32' height='32' className='hidden logo800:block'>
                    <use xlinkHref='/images/logo_small.svg#logo_small' />
                  </svg>
                </a>
              </Link>
              <div className='block border-box lg:hidden'>
                <div className='flex items-center border-box'>
                  <div className='relative mr-8 logo1200:mr-4'>
                    <span className='no-underline text-base leading-relaxed cursor-pointer text-link01 border-box hover:text-link01Hover'>
                      {t('trade')}
                    </span>
                  </div>
                  <DaoDropDown />
                  {/* <div className='relative mr-8 logo1200:mr-4'>
                    <span className='inline-flex justify-center items-center w-full no-underline text-base leading-relaxed cursor-pointer text-link01 border-box'>
                      <span className='mr-1'>{t('dao')}</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </span>
                  </div> */}
                  <MoreDropdown />
                  {/* <div className='relative mr-8 logo1200:mr-4'>
                    <span className='inline-flex justify-center items-center w-full no-underline text-base leading-relaxed cursor-pointer text-link01 border-box'>
                      <span className='mr-1'>{t('more')}</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </span>
                  </div> */}
                  <div className='relative mr-0'>
                    <span className='no-underline text-base leading-relaxed cursor-pointer text-link01 border-box hover:text-link01Hover'>
                      {t('buy-eth')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className='flex justify-end border-box'>
              {/* ethereum */}
              <div className='mr-2 lg:mr-4'>
                <div className='flex relative justify-end'>
                  <div>
                    <div className='md:hidden'>
                      <button className='bg-1inch-btn-gradient-bg-02 text-commonText01 flex items-center h-9 py-1.5 pr-2.5 pl-2 rounded-xl border-none pointer normal-case overflow-visible appearance-none'>
                        <svg width='24' height='24'>
                          <use xlinkHref='/images/icons/ethereumTransparent.svg#ethereum' />
                        </svg>
                        <span className='ml-2'>Ethereum</span>
                        <svg width='16' height='16' className='ml-1'>
                          <use xlinkHref='/images/icons/arrow.svg#arrow' />
                        </svg>
                      </button>
                    </div>
                    <div className='hidden md:block'>
                      <button className='bg-1inch-btn-gradient-bg-02 text-commonText01 flex items-center h-9 py-1.5 pr-2.5 pl-2 rounded-xl border-none pointer normal-case overflow-visible appearance-none'>
                        <svg width='24' height='24'>
                          <use xlinkHref='/images/icons/ethereumTransparent.svg#ethereum' />
                        </svg>
                        <svg width='16' height='16' className='ml-1'>
                          <use xlinkHref='/images/icons/arrow.svg#arrow' />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ConnectWallet */}
              <div className='flex items-center lg:mr-4 sm:fixed sm:inset-x-0 sm:bottom-0 sm:z-40 sm:py-3.5 sm:px-4 sm:mr-0 sm:border-t sm:border-solid sm:border-border01 sm:bg-bg01'>
                <button className='bg-btnBg04 text-text02 flex items-center h-9 py-1.5 pr-2.5 pl-2 rounded-xl border-none pointer normal-case overflow-visible appearance-none'>
                  <svg width='24' height='24'>
                    <use xlinkHref='/images/icons/wallet.svg#wallet' />
                  </svg>
                  <span className='ml-2'>Connect Wallet</span>
                </button>
                <SettingDropdown />
                {/* <button className='ml-6 border-none p-0 pointer appearance-none sm:order-first sm:ml-0 sm:mr-4'>
                  <svg width='24' height='24'>
                    <use xlinkHref='/images/icons/settings3.svg#settings3' />
                  </svg>
                </button> */}
              </div>
              {/* 1inch token */}
              <div className='hidden mr-2 lg:mr-4 sm:block'>
                <button className='bg-btnBg01 text-text01 flex items-center h-9 py-1.5 pr-2.5 pl-2 rounded-xl border-none pointer normal-case appearance-none'>
                  <svg width='24' height='24'>
                    <use xlinkHref='/images/1inch-token.svg#1inch' />
                  </svg>
                  <span className='ml-2'>0</span>
                </button>
              </div>
              {/* menu mobile */}
              <div className='hidden lg:block'>
                <button className='p-0 flex items-center h-9 rounded-xl border-none pointer appearance-none normal-case overflow-visible'>
                  <svg width='24' height='24'>
                    <use xlinkHref='/images/icons/menu_2.svg#menu' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

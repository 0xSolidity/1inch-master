import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('../components/charts/chart'), {
  ssr: false,
});
const CandleChart = dynamic(() => import('../components/charts/candleChart'), {
  ssr: false,
});
``;

const Home = () => {
  const { t } = useTranslation('nav');
  console.log(process.env.NEXT_PUBLIC_APP_NAME);
  console.log(t('title'));

  return (
    <div className='max-w-1400 mx-auto page-content-wrap px-4'>
      <div className='text-center mb-4 1inchMd:mt-5 1inchMd:mb-10'>
        <h1 className='mb-2 font-medium text-base leading-5 1inchMd:text-2xl 1inchMd:font-normal 1inchMd:mb-0'>
          THE MOST EFFICIENT DEFI AGGREGATOR
        </h1>
        <h2 className='hidden text-base text-textGray font-medium 1inchMd:block 1inchMd:mx-2 1inchMd:leading-7'>
          Access the most liquidity, lowest slippage and best exchange rates
          across Ethereum, Binance Smart Chain and Polygon.
        </h2>
      </div>
      <div className='flex flex-col 1inch940:grid 1inch940:grid-cols-content 1inch940:gap-x-10 1inch940:w-full'>
        <div className='1inch940:col-start-2 1inch940:col-end-3 1inch940:row-start-1'>
          <div>
            <div className='min-h-540 max-h-full max-w-480 my-0 mx-auto rounded-20px border-none p-0 bg-bg02 relative block transition'>
              <div className='my-0 p-8 h-full'>
                <div className='p-0 mb-0 1inchMd:mb-6'>
                  <a className='pb-1 border-b-2 border-solid border-blueAccent whitespace-nowrap capitalize text-white mr-10 no-underline bg-transparent pointer'>
                    Market
                  </a>
                  <a className='pb-1 text-textGray overflow-hidden whitespace-nowrap capitalize no-underline bg-transparent pointer'>
                    Limit
                  </a>
                </div>
                <div>
                  <div>
                    <div className='block absolute z-10 right-8 top-5 sm:right-4'>
                      <button className='inline-block pointer p-0 min-w-0 w-10 h-10 flex-shrink-0 leading-10 bg-darkMainBlue text-iconButtonActive rounded-xl relative select-none outline-none border-none whitespace-nowrap no-underline align-baseline text-center m-0 overflow-visible justify-center items-center font-medium text-3xl normal-case'>
                        <span className='flex justify-center'>
                          <svg
                            id='timer'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 120 120'
                          >
                            <circle
                              cx='60'
                              cy='60'
                              r='50'
                              fill='none'
                              stroke='none'
                              stroke-width='8'
                            ></circle>
                            <circle
                              cx='60'
                              cy='60'
                              r='50'
                              transform='rotate(-90 60 60)'
                              fill='none'
                              stroke-dashoffset='0'
                              stroke-dasharray='314'
                              stroke='currentColor'
                              stroke-width='14'
                            ></circle>
                          </svg>
                        </span>
                      </button>

                      <button className='inline-block ml-4 pointer p-0 min-w-0 w-10 h-10 flex-shrink-0 leading-10 bg-bgIconButton text-iconButton rounded-xl relative select-none outline-none border-none whitespace-nowrap no-underline align-baseline text-center m-0 overflow-visible justify-center items-center font-medium text-3xl normal-case'>
                        <span className='flex justify-center'>
                          <svg width='24' height='24'>
                            <use xlinkHref='/images/icons/refresh.svg#refresh' />
                          </svg>
                        </span>
                      </button>

                      <button className='inline-block ml-4 pointer p-0 min-w-0 w-10 h-10 flex-shrink-0 leading-10 bg-bgIconButton text-iconButton rounded-xl relative select-none outline-none border-none whitespace-nowrap no-underline align-baseline text-center m-0 overflow-visible justify-center items-center font-medium text-3xl normal-case'>
                        <span className='flex justify-center'>
                          <svg width='24' height='24'>
                            <use xlinkHref='/images/icons/plus.svg#plus' />
                          </svg>
                        </span>
                      </button>

                      <button className='inline-block ml-4 pointer p-0 min-w-0 w-10 h-10 flex-shrink-0 leading-10 bg-bgIconButton text-iconButton rounded-xl relative select-none outline-none border-none whitespace-nowrap no-underline align-baseline text-center m-0 overflow-visible justify-center items-center font-medium text-3xl normal-case'>
                        <span className='flex justify-center'>
                          <svg width='24' height='24'>
                            <use xlinkHref='/images/icons/settings.svg#settings' />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className='overflow-hidden h-full'>
                      <div className='flex justify-center items-center flex-col my-5 mx-0'>
                        <div className='z-30 w-full mt-5 1inchMd:mt-0'>
                          <div className='flex justify-between mb-2'>
                            <span className='inline-block font-bold text-base leading-4 text-textGray'>
                              You Pay
                            </span>
                          </div>
                          <div>
                            <div className='w-full relative'>
                              <div className='h-82px py-3.5 px-4 m-0 relative z-20 w-full rounded-2xl outline-none bg-bgBlackInput text-blackInput'>
                                <div>
                                  <div className='w-full flex justify-between items-center mb-1'>
                                    <span className='whitespace-nowrap overflow-hidden overflow-ellipsis w-1/2 text-textGray'>
                                      <span>Ethereum</span>
                                    </span>
                                    <div className='w-1/2 text-right'>
                                      <div className='inline text-textGray text-right'>
                                        <span>
                                          <span>~ $2,137</span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='w-full flex items-center justify-between '>
                                    <button className='flex 1inch940:hidden pointer leading-8 p-0 items-center whitespace-nowrap no-underline font-normal text-center align-middle select-none bg-transparent border border-transparent text-base transition text-textDropdown '>
                                      <img
                                        className='mr-1 -mt-0.5'
                                        width='24px'
                                        src='https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png'
                                      />
                                      ETH
                                      <div className='pb-0.5'>
                                        <svg
                                          width='24'
                                          height='24'
                                          className='text-textGray inline-block ml-1'
                                        >
                                          <use xlinkHref='/images/icons/arrow.svg#arrow' />
                                        </svg>
                                        {/* <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          className='h-5 w-5 text-textGray ml-1 inline-block'
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
                                        </svg> */}
                                      </div>
                                    </button>
                                    <button className='hidden 1inch940:flex pointer leading-8 p-0 items-center whitespace-nowrap no-underline font-normal text-center align-middle select-none bg-transparent border border-transparent text-base transition text-textDropdown '>
                                      <img
                                        className='mr-1 -mt-0.5'
                                        width='24px'
                                        src='https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png'
                                      />
                                      ETH
                                      <div className='pb-0.5'>
                                        <svg
                                          width='24'
                                          height='24'
                                          className='text-textGray inline-block ml-1'
                                        >
                                          <use xlinkHref='/images/icons/arrow.svg#arrow' />
                                        </svg>
                                        {/* <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          className='h-5 w-5 text-textGray ml-1 inline-block'
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
                                        </svg> */}
                                      </div>
                                    </button>
                                    <div className='py-2.5 -my-2.5 h-46px relative w-inherit'>
                                      <input
                                        inputMode='decimal'
                                        placeholder='0.0'
                                        value='1'
                                        autoComplete='off'
                                        className='absolute inset-0 form-control text-right p-0 text-2xl leading-26px border-none text-current bg-transparent overflow-visible outline-none'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <div>Drop down</div> */}
                            </div>
                          </div>
                        </div>
                        <button className='mt-2.5 -mb-3 p-0 min-w-0 w-10 h-10 flex-shrink-0 leading-10 relative border-none inline-block outline-none whitespace-nowrap no-underline text-center align-baseline overflow-visible bg-transparent text-textGray rounded-xl text-sm font-normal normal-case pointer select-none'>
                          <span className='flex- justify-center items-center'>
                            <svg width='24' height='24'>
                              <use xlinkHref='/images/icons/change.svg#change' />
                            </svg>
                          </span>
                        </button>
                        <div className='w-full mt-5 1inchMd:mt-0'>
                          <div className='flex justify-between mb-2'>
                            <span className='inline-block font-bold text-base leading-4 text-textGray'>
                              You Receive
                            </span>
                          </div>
                          <div>
                            <div className='w-full relative'>
                              <div className='h-82px py-3.5 px-4 m-0 relative z-20 w-full rounded-2xl outline-none bg-bgBlackInput text-blackInput'>
                                <div>
                                  <div className='w-full flex justify-between items-center mb-1'>
                                    <span className='whitespace-nowrap overflow-hidden overflow-ellipsis w-1/2 text-textGray'>
                                      <span>Dai Stablecoin</span>
                                    </span>
                                  </div>
                                  <div className='w-full flex items-center justify-between '>
                                    <button className='flex 1inch940:hidden pointer leading-8 p-0 items-center whitespace-nowrap no-underline font-normal text-center align-middle select-none bg-transparent border border-transparent text-base transition text-textDropdown '>
                                      <img
                                        className='mr-1 -mt-0.5'
                                        width='24px'
                                        src='https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png'
                                      />
                                      DAI
                                      <div className='pb-0.5'>
                                        <svg
                                          width='24'
                                          height='24'
                                          className='text-textGray inline-block ml-1'
                                        >
                                          <use xlinkHref='/images/icons/arrow.svg#arrow' />
                                        </svg>
                                        {/* <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          className='h-5 w-5 text-textGray ml-1 inline-block'
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
                                        </svg> */}
                                      </div>
                                    </button>
                                    <button className='hidden 1inch940:flex pointer leading-8 p-0 items-center whitespace-nowrap no-underline font-normal text-center align-middle select-none bg-transparent border border-transparent text-base transition text-textDropdown '>
                                      <img
                                        className='mr-1 -mt-0.5'
                                        width='24px'
                                        src='https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png'
                                      />
                                      DAI
                                      <div className='pb-0.5'>
                                        <svg
                                          width='24'
                                          height='24'
                                          className='text-textGray inline-block ml-1'
                                        >
                                          <use xlinkHref='/images/icons/arrow.svg#arrow' />
                                        </svg>
                                        {/* <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          className='h-5 w-5 text-textGray ml-1 inline-block'
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
                                        </svg> */}
                                      </div>
                                    </button>
                                    <div className='py-2.5 -my-2.5 h-46px relative w-inherit'>
                                      <input
                                        inputMode='decimal'
                                        disabled
                                        readOnly
                                        autoComplete='off'
                                        className='absolute inset-0 form-control text-right p-0 text-2xl leading-26px border-none text-current bg-transparent overflow-visible outline-none'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <div>Drop down</div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <div className='w-full flex justify-center'>
                          <button className='flex justify-center items-center w-full pointer border-box relative select-none outline-none border-none whitespace-nowrap no-underline align-baseline text-center m-0 min-w-64px overflow-visible text-base leading-26px min-h-40px py-2 px-8 rounded-xl font-medium bg-darkMainBlue text-textBlue'>
                            <span>
                              <span className='font-normal align-middle flex items-center'>
                                <img
                                  width='24px'
                                  height='24px'
                                  className='mr-2'
                                  src='/images/icons/connect.svg'
                                />
                                <span>Connect Wallet</span>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className='flex justify-center mt-5'>
                        <div className='rounded-2xl p-4 w-full max-w-420 border border-solid border-subCard'>
                          <div className='1inchMd:min-w-350'>
                            <div className='w-full mb-4 '>
                              <div className='flex justify-between mb-1'>
                                <p className='whitespace-nowrap block m-0 mr-4 text-textGray'>
                                  Sell price
                                </p>
                                <div className='whitespace-nowrap flex overflow-hidden'>
                                  <span className='text-textGray'>1&nbsp;</span>
                                  <span className='overflow-hidden whitespace-nowrap overflow-ellipsis inline-block min-w-16px text-textGray'>
                                    ETH
                                  </span>
                                  <span className='text-textGray'>
                                    &nbsp;=&nbsp;
                                  </span>
                                  <span className=''>2,229.1792716&nbsp;</span>
                                  <span className='overflow-hidden whitespace-nowrap overflow-ellipsis inline-block min-w-16px text-textGray'>
                                    DAI
                                  </span>
                                </div>
                              </div>
                              <div className='flex justify-between'>
                                <span></span>
                                <div className='inline text-right whitespace-nowrap text-current'>
                                  <span className='font-normal text-13px'>
                                    <span className='text-commonText02'>
                                      ~$2,231
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='w-full mb-4 '>
                              <div className='flex justify-between mb-1'>
                                <p className='whitespace-nowrap block m-0 mr-4 text-textGray'>
                                  Buy price
                                </p>
                                <div className='whitespace-nowrap flex overflow-hidden'>
                                  <span className='text-textGray'>1&nbsp;</span>
                                  <span className='overflow-hidden whitespace-nowrap overflow-ellipsis inline-block min-w-16px text-textGray'>
                                    DAI
                                  </span>
                                  <span className='text-textGray'>
                                    &nbsp;=&nbsp;
                                  </span>
                                  <span className=''>0.0004486&nbsp;</span>
                                  <span className='overflow-hidden whitespace-nowrap overflow-ellipsis inline-block min-w-16px text-textGray'>
                                    ETH
                                  </span>
                                </div>
                              </div>
                              <div className='flex justify-between'>
                                <span></span>
                                <div className='inline text-right whitespace-nowrap text-current'>
                                  <span className='font-normal text-13px'>
                                    <span className='text-commonText02'>
                                      ~$1
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='w-full mb-4 '>
                              <div className='flex justify-between'>
                                <p className='text-textGray'>
                                  Transaction cost
                                </p>
                                <span>≈ $12.41</span>
                              </div>
                              <div className='flex justify-between'>
                                <span></span>
                                <span className='text-textGray text-xs'>
                                  0.005553072&nbsp;Ξ
                                </span>
                              </div>
                            </div>
                            <div className='w-full mb-0 mt-4 '>
                              <p className='flex justify-between'>
                                <span className='text-textGray'>
                                  <span className='inline-block'>You Save</span>
                                  <svg
                                    width='16'
                                    height='16'
                                    className='ml-1 -mt-0.5 text-textGray inline-block'
                                  >
                                    <use xlinkHref='/images/icons/info.svg#info' />
                                  </svg>
                                </span>
                                <span className='text-right text-warningText03'>
                                  ≈ $0.49
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='mt-5'>
                          <div>
                            <div className='grid grid-cols-3 h-14 text-xs leading-9 p-1 rounded-xl bg-bg05 border-none relative flex-row whitespace-nowrap overflow-hidden'>
                              <div className='bg-btnBg01 text-base leading-46px h-full pointer rounded-lg text-text03 font-medium whitespace-nowrap relative'>
                                <button className='pointer border-0 bg-transparent p-0 m-0 outline-none w-full relative'>
                                  <span className='p-0 select-none inline-block leading-9 relative pointer'>
                                    <span className='align-middle font-medium'>
                                      Max return
                                    </span>
                                  </span>
                                </button>
                              </div>
                              <div className='bg-transparent text-base leading-46px h-full pointer rounded-lg text-text03 font-medium whitespace-nowrap relative'>
                                <button className='pointer border-0 bg-transparent p-0 m-0 outline-none w-full relative'>
                                  <span className='p-0 select-none inline-block leading-9 relative pointer'>
                                    <span className='align-middle font-medium'>
                                      Lowest gas
                                    </span>
                                  </span>
                                </button>
                              </div>
                              <div className='bg-transparent text-base leading-46px h-full pointer rounded-lg text-text03 font-medium whitespace-nowrap relative'>
                                <button className='pointer border-0 bg-transparent p-0 m-0 outline-none w-full relative'>
                                  <span className='p-0 select-none inline-block leading-9 relative pointer'>
                                    <span className='align-middle font-medium'>
                                      OTC
                                    </span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-center text-xs mt-6'>
                        <span className='select-none cursor-default text-commonText02 opacity-50'>
                          12904730
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-10 grid grid-cols-referralCard gap-x-4 leading-6 items-center'>
              <img width='60' height='60' src='/images/icons/chi-info.svg' />
              <p className='text-textGray m-0'>
                <span>
                  Transactions on app.1inch.io are up to 42% cheaper because of
                  using
                </span>
                <span>&nbsp;</span>
                <a className='text-linkBlue no-underline bg-transparent'>
                  CHI GasToken
                </a>
                <span>&nbsp;</span>
                <a className='text-linkBlue no-underline bg-transparent'>
                  Read more
                </a>
                <span>&nbsp;</span>
                <span>about 1inch's CHI GasToken innovation.</span>
              </p>
            </div>
            <div className='mt-10 grid grid-cols-referralCard gap-x-4 leading-6 items-center'>
              <div>
                <img width='60' height='60' src='/images/icons/referral.svg' />
              </div>
              <div>
                <p className='text-textGray m-0'>
                  Connect wallet to generate referral link
                </p>
                <p className='text-textGray m-0'>
                  <span>How it works?</span>
                  <span>&nbsp;</span>
                  <a className='text-linkBlue no-underline bg-transparent'>
                    Read more
                  </a>
                </p>
              </div>
            </div>
            <div className='mt-10 grid grid-cols-referralCard gap-x-4 leading-6 items-center'>
              <img width='60' height='60' src='/images/icons/charity.svg' />
              <div>
                <p className='text-white m-0'>Donate Crypto to Charities</p>
                <p className='text-textGray'>
                  <span>
                    Thanks to 1inch’s partnership with The Giving Block, you can
                    donate bitcoin and other cryptocurrencies to a non-profit.
                  </span>
                  <span>&nbsp;</span>
                  <a className='text-linkBlue no-underline bg-transparent'>
                    View Charities
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-7 1inch940:col-start-1 1inch940:col-end-2 1inch940:row-start-1 1inch940:-mt-10 1inch940:overflow-hidden'>
          <div className='mt-7 flex flex-col 1inch940:mt-10'>
            <div className='relative overflow-hidden flex transition-height ease-in-out duration-500'>
              <div className='relative overflow-x-hidden overflow-y-auto z-10 flex-grow inset-0 block '>
                <div className='transform-none h-full overflow-hidden'>
                  <div>
                    <div className='flex items-center justify-between mb-5'>
                      <div className='relative'>
                        <div className='pointer flex items-center whitespace-nowrap'>
                          <div className='mr-2 flex flex-row items-center'>
                            <div className='flex items-center flex-row'>
                              <img
                                width='36'
                                className='w-8'
                                src='https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png'
                              />
                              <img
                                width='36'
                                className='-ml-3 w-8'
                                src='https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png'
                              />
                            </div>
                            <div className='mr-2'></div>
                            <div>
                              <span>ETH</span>
                              <span>&nbsp;/&nbsp;</span>
                              <span>DAI</span>
                            </div>
                            <svg width='16' height='16' className='ml-1'>
                              <use xlinkHref='/images/icons/arrow.svg#arrow' />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className='block'>
                        <div className='flex items-center'>
                          <span className='text-xs mr-1'>Candle Period:</span>
                          <div className='relative inline-flex flex-row whitespace-nowrap overflow-hidden'>
                            <div className='text-xs py-1 px-3 bg-transparent whitespace-nowrap relative'>
                              <button className='pointer border-0 bg-transparent outline-none w-full'>
                                <span className='px-2'>5m</span>
                              </button>
                            </div>
                            <div className='text-xs py-1 px-3 bg-transparent whitespace-nowrap relative'>
                              <button className='pointer border-0 bg-transparent outline-none w-full'>
                                <span className='px-2'>15m</span>
                              </button>
                            </div>
                            <div className='text-xs py-1 px-3 bg-transparent whitespace-nowrap relative'>
                              <button className='pointer border-0 bg-transparent outline-none w-full'>
                                <span className='px-2'>1H</span>
                              </button>
                            </div>
                            <div className='text-xs py-1 px-3 bg-transparent whitespace-nowrap relative'>
                              <button className='pointer border-0 bg-transparent outline-none w-full'>
                                <span className='px-2'>4H</span>
                              </button>
                            </div>
                            <div className='text-xs py-1 px-3 bg-transparent whitespace-nowrap relative'>
                              <button className='pointer border-0 bg-transparent outline-none w-full'>
                                <span className='px-2'>1D</span>
                              </button>
                            </div>
                            <div className='text-xs py-1 px-3 bg-transparent whitespace-nowrap relative'>
                              <button className='pointer border-0 bg-transparent outline-none w-full'>
                                <span className='px-2'>1W</span>
                              </button>
                            </div>
                          </div>
                          <span className='h-6 border-l border-borderLightGrey ml-1 mr-5'></span>
                          <svg
                            width='24'
                            height='24'
                            className='text-blueAccent'
                          >
                            <use xlinkHref='/images/icons/candlestick_chart.svg#candlestick_chart' />
                          </svg>
                          <svg width='24' height='24' className='textGray ml-5'>
                            <use xlinkHref='/images/icons/line_chart.svg#line_chart' />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full block'>
                    <div className='flex flex-col'>
                      <div className='flex justify-between mb-5'>
                        <div className='flex items-center w-full'>
                          <span className='mr-1 text-32px truncate 1inchXl:max-w-430'>
                            2153.6704796440545
                          </span>
                          <span className='text-textGreen'>
                            <span>+</span>
                            <span>0.24%</span>
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className='ml-8'>
                          <Chart />
                          {/* <CandleChart /> */}
                        </div>
                      </div>
                      {/* <div>setting mobile</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-7 1inch940:mt-10'>
            <div className='mb-4 flex justify-between items-center'>
              <h2 className='text-2xl m-0 leading-5 1inchMd:leading-7 font-medium'>
                Routing
              </h2>
              <button className='pointer p0 min-w-0 w-10 h-10 flex-shrink-0 leading-10 relative select-none outline-none border-none inline-block whitespace-nowrap no-underline align-baseline text-center m-0 overflow-visible font-medium bg-transparent transform-none'>
                <span>
                  <svg
                    width='16'
                    height='16'
                    className='text-textGray align-middle'
                  >
                    <use xlinkHref='/images/icons/fullscreen_2.svg#fullscreen' />
                  </svg>
                </span>
              </button>
            </div>
            <div>
              <div className='flex justify-center w-full'>
                <div className='rounded-lg p-4 pl-0 flex justify-center flex-col items-center relative'>
                  <img
                    width='32px'
                    height='32px'
                    className='mb-1 align-middle border-none'
                    src='https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png'
                  />
                  <span
                    className='absolute w-px top-0 bottom-0 -right-px'
                    style={{
                      background:
                        'linear-gradient(180deg,#273a5500,#273a55 50.65%,#273a5500)',
                    }}
                  />
                </div>
                <div className='grid grid-rows-1 grid-cols-1 gap-x-6 gap-y-8 w-full overflow-auto py-0 pr-5 pl-3'>
                  <div>
                    <div>
                      <div className='relative flex justify-between'>
                        <div className='flex items-center justify-center -mr-3 min-w-60px relative text-textGray'>
                          <svg
                            width='24'
                            height='24'
                            className='-mt-0.5 text-textGray'
                          >
                            <use xlinkHref='/images/icons/arrow-right_2.svg#arrow-right' />
                          </svg>
                        </div>
                        <div className='flex justify-center flex-col w-full'>
                          <div className='pt-3 px-3 rounded-2xl my-1 mx-5 text-base leading-4 relative border border-solid border-subCard'>
                            <div className='grid grid-cols-cellHeader gap-x-1 items-center mb-2'>
                              <img
                                className='w-full'
                                src='https://tokens.1inch.exchange/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png'
                              />
                              <p className='m-0'>WETH</p>
                            </div>
                            <p className='rounded-lg p-1 mb-2 whitespace-nowrap select-none text-textGray bg-routingBox'>
                              <span className='pointer'> WETH </span>
                              <span className='pointer'>100% </span>
                            </p>
                            <svg
                              width='24'
                              height='24'
                              className='absolute routing-image text-textGray'
                            >
                              <use xlinkHref='images/icons/arrow-right_2.svg#arrow-right' />
                            </svg>
                          </div>
                        </div>
                        <div className='flex justify-center flex-col w-full'>
                          <div className='pt-3 px-3 rounded-2xl my-1 mx-5 text-base leading-4 relative border border-solid border-subCard'>
                            <div className='grid grid-cols-cellHeader gap-x-1 items-center mb-2'>
                              <img
                                className='w-full'
                                src='https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png'
                              />
                              <p className='m-0'>DAI</p>
                            </div>
                            <p className='rounded-lg p-1 mb-2 whitespace-nowrap select-none text-textGray bg-routingBox'>
                              <span className='pointer'> PMM4 </span>
                              <span className='pointer'>100% </span>
                            </p>
                            <svg
                              width='24'
                              height='24'
                              className='absolute routing-image text-textGray'
                            >
                              <use xlinkHref='images/icons/arrow-right_2.svg#arrow-right' />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='rounded-lg p-4 pr-0 flex justify-center flex-col items-center relative'>
                  <img
                    width='32px'
                    height='32px'
                    className='mb-1 align-middle border-none'
                    src='https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png'
                  />
                  <span
                    className='absolute -left-px right-auto w-px top-0 bottom-0'
                    style={{
                      background:
                        'linear-gradient(180deg,#273a5500,#273a55 50.65%,#273a5500)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Home;

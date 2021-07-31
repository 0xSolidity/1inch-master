const Footer = () => {
  return (
    <div className='max-w-1400 mx-auto px-4'>
      <div className='py-4 mt-8 mb-16 1inchMd:flex 1inchMd:flex-col 1inchMd:my-0 border-box'>
        <div className='mb-8 text-center border-box 1inchMd:flex 1inchMd:flex-row 1inchMd:justify-between 1inchMd:mt-4'>
          <div className='flex items-center justify-between mb-8 text-center border-box 1inchMd:mb-4 1inchMd:order-last'>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/mail.svg#mail' />
              </svg>
            </a>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/forum.svg#forum' />
              </svg>
            </a>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/reddit.svg#reddit' />
              </svg>
            </a>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/discord.svg#discord' />
              </svg>
            </a>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/medium.svg#medium' />
              </svg>
            </a>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/twitter.svg#twitter' />
              </svg>
            </a>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/youtube.svg#youtube' />
              </svg>
            </a>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/telegram.svg#telegram' />
              </svg>
            </a>
            <a
              href='#'
              className='p-0 inline-block mx-1 no-underline bg-transparent border-box'
            >
              <svg className='h-34px w-34px m-0 text-textGray'>
                <use xlinkHref='/icons/github.svg#github' />
              </svg>
            </a>
          </div>
          <div className='border-box 1inchMd:flex 1inchMd:items-center'>
            <div className='grid grid-cols-2 mb-8 text-center border-box 1inchMd:mb-0 1inchMd:block 1inchMd:text-left 1inchMd:order-last'>
              <div className='1inchMd:mb-27px'>
                <a
                  href='#'
                  className='block mb-5 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-10'
                >
                  Privacy Policy
                </a>
                <a
                  href='#'
                  className='block mb-5 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-10'
                >
                  Terms of Service
                </a>
                <a
                  href='#'
                  className='block mb-5 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-10'
                >
                  1inch V1 (Legacy)
                </a>
                <a
                  href='#'
                  className='block mb-0 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-0'
                >
                  Press Room
                </a>
              </div>
              <div>
                <a
                  href='#'
                  className='block mb-5 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-10'
                >
                  Tokens
                </a>
                <a
                  href='#'
                  className='block mb-5 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-10'
                >
                  API
                </a>
                <a
                  href='#'
                  className='block mb-5 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-10'
                >
                  Stats
                </a>
                <a
                  href='#'
                  className='block mb-5 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-10'
                >
                  Earn (Legacy)
                </a>
                <a
                  href='#'
                  className='block mb-0 text-textGray no-underline bg-transparent 1inchMd:inline-block 1inchMd:mb-0 1inchMd:mr-0'
                >
                  Limit Order (Legacy)
                </a>
              </div>
            </div>
            <svg
              width='78'
              height='97'
              className='mx-auto 1inchMd:ml-0 1inchMd:mr-10 opacity-20 text-blueAccent'
            >
              <use xlinkHref='/images/mask.svg#mask' />
            </svg>
          </div>
        </div>
        <div className='h-px bg-textGray opacity-30 mb-5'></div>
        <div className='d-flex justify-content-between mb-80 text-center flex-col items-center'>
          <div className='d-flex align-items-center'>
            <svg height='22' width='24' className='mr-1 text-textGray'>
              <use xlinkHref='/images/footer-logo.svg#footer-logo' />
            </svg>
            <span className='text-textGray'>
              © 2021 1inch, All Rights Reserved.
            </span>
          </div>
        </div>
        <p className='text-textGray text-xs font-light text-center mb-2'>
          <span className=''>
            Transactions on app.1inch.io are up to 42% cheaper because of using{' '}
          </span>
          <a href='#' className='no-underline bg-transparent text-linkBlue'>
            CHI GasToken
          </a>
        </p>
        <div className='text-textGray text-xs font-light text-center mb-0'>
          <p className='m-0'>
            <span>
              {' '}
              ENS:
              <a className='no-underline bg-transparent text-blueAccent'>
                1inch.eth
              </a>
              &nbsp;
            </span>
            <a className='no-underline bg-transparent text-blueAccent'>
              @ETHNewYork
            </a>
            &nbsp; 2019&nbsp;
            <span className='text-textGray'>
              {' '}
              (v1.0.693 ,{' '}
              <a className='no-underline bg-transparent text-blueAccent'>
                IPFS link
              </a>
              )
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const SettingDropdown = () => {
  return (
    <div className=''>
      <Menu as='div' className='relative'>
        <div>
          <Menu.Button className='ml-6 border-none p-0 pointer appearance-none sm:order-first sm:ml-0 sm:mr-4'>
            <svg width='24' height='24'>
              <use xlinkHref='/images/icons/settings3.svg#settings3' />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute -right-3 w-420px rounded-3xl pt-22px pb-4 px-4 bg-bg02 mt-0.5 z-50 shadow-1inchShadow01'>
            <div>
              <div className='pb-4'>
                <button className='absolute right-4 top-5 p-0 border-none text-text03 pointer bg-transparent'>
                  <svg width='24' height='24'>
                    <use xlinkHref='/images/icons/cross.svg#cross' />
                  </svg>
                </button>
                <span className='text-xl font-medium text-text03 leading-4'>
                  Global Settings
                </span>
              </div>
              <div className='grid grid-cols-2 gap-2'>
                <div className='p-4 rounded-14px bg-bg03'>
                  <div className='flex justify-between mb-22px items-center'>
                    <img width='24' height='24' src='/images/icons/theme.svg' />
                    <button
                      type='button'
                      className='bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      role='switch'
                      aria-checked='false'
                    >
                      <span className='sr-only'>Use setting</span>
                      <span
                        aria-hidden='true'
                        className='translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      ></span>
                    </button>
                  </div>
                  <div>
                    <p className='text-base leading-relaxed mb-1'>Dark Mode</p>
                    <p className='text-xs text-commonText02 m-0'>
                      Theme for the web
                    </p>
                  </div>
                </div>
                <div className='p-4 rounded-14px bg-bg03 h-full flex flex-col justify-between pointer'>
                  <div className='flex justify-between mb-22px items-center'>
                    <img
                      width='24'
                      height='24'
                      src='/images/flags/en-US_icon.png'
                    />
                    <div>
                      <svg width='24' height='24' className='text-commonText02'>
                        <use xlinkHref='/images/icons/arrow-right_2.svg#arrow-right' />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className='text-base leading-relaxed mb-1'>English</p>
                    <p className='text-xs text-commonText02 m-0'>
                      Choose language
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default SettingDropdown;

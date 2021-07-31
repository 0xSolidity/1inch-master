import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const MoreDropdown = () => {
  return (
    <div className=''>
      <Menu as='div' className='relative mr-8 logo1200:mr-4'>
        <div>
          <Menu.Button className='inline-flex justify-center items-center w-full no-underline text-base leading-relaxed text-link01 border-box'>
            <span className='mr-1'>More</span>
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
          <Menu.Items className='absolute left-0 mt-1.5 z-50 p-5 w-max min-w-172 rounded-2xl shadow-1inchShadow01 bg-bg02'>
            {/* pt-4 absolute left-0 top-4 z-50 */}
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center mb-4 no-underline text-base leading-relaxed pointer bg-transparent ${
                    active ? 'text-white' : 'text-link01'
                  } `}
                  href='#'
                >
                  <svg width='24' height='24' className='mr-4 self-start'>
                    <use xlinkHref='/images/icons/about.svg#about' />
                  </svg>
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center mb-4 no-underline text-base leading-relaxed pointer bg-transparent ${
                    active ? 'text-white' : 'text-link01'
                  } `}
                  href='#'
                >
                  <svg width='24' height='24' className='mr-4 self-start'>
                    <use xlinkHref='/images/icons/api.svg#api' />
                  </svg>
                  API
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center mb-4 no-underline text-base leading-relaxed pointer bg-transparent ${
                    active ? 'text-white' : 'text-link01'
                  } `}
                  href='#'
                >
                  <svg width='24' height='24' className='mr-4 self-start'>
                    <use xlinkHref='/images/icons/blog.svg#blog' />
                  </svg>
                  Blog
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center mb-4 no-underline text-base leading-relaxed pointer bg-transparent ${
                    active ? 'text-white' : 'text-link01'
                  } `}
                  href='#'
                >
                  <svg width='24' height='24' className='mr-4 self-start'>
                    <use xlinkHref='/images/icons/help.svg#help' />
                  </svg>
                  Helo
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center mb-0 no-underline text-base leading-relaxed pointer bg-transparent ${
                    active ? 'text-white' : 'text-link01'
                  } `}
                  href='#'
                >
                  <svg width='24' height='24' className='mr-4 self-start'>
                    <use xlinkHref='/images/icons/forum.svg#forum' />
                  </svg>
                  Forum
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MoreDropdown;

import Link from 'next/link';

const Sitemap = (props: { href: string; title: string }) => {
  return (
    <div className='px-4 py-2 1inchMd:px-3'>
      <Link href={props.href}>
        <a>{props.title}</a>
      </Link>
    </div>
  );
};

export default Sitemap;
// components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex  text-white p-4 items-center my-2">

      <div className="text-xl font-bold">
        <Link href="/">
          Meu Site
        </Link>
      </div>


      <div className=" w-4xl mx-auto flex items-center">

        <nav className='flex w-full'>
          <ul className="flex w-full justify-around space-x-6">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                Procedimento
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contat
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Local
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

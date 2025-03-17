"use client"
// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { kameron, libre } from '@/app/fonts'


const Banner: React.FC = () => {
  return (
    <div className="w-full  grid grid-cols-3 gap-4 flex items-center justify-center">
      <div className='col-span-2 p-24'>
        <div className='gap-y-1.5'>
          <h3 className={`${kameron.className} text-center text-4xl text-amber-950`}>O Poder de uma pele</h3>
          <h1 className={`${libre.className} text-8xl p-2 text-amber-50`}>Bem Cuidada</h1>
          <h3 className={`${kameron.className} text-end text-4xl text-amber-950`}>  Começa aqui!</h3>

          <div className='py-12 z-40 flex items-center justify-center gap-8 text-2xl'>
            <Link href="/" ><button className="flex my-8 flex items-center bg-amber-950 text-white   py-1 rounded-full w-74 justify-evenly">
              <span className={`${kameron.className} text-end text-2xl`}>Entrar em contato</span>
              <span className=" rounded-full bg-amber-950">
                <Image
                  src="/imgArrowContat.svg"
                  alt="Arrow Contat .img"
                  width={56}
                  height={56} />

              </span>
            </button></Link>
            <Link href="/">
              <h4 className='underline'>Dicas de Cuidados</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className='my-8'>
        <Image
          src="/imgBodyApresent.svg"
          alt="banner .img"
          width={300}
          height={700} />

      </div>

    </div>
  );
};

export default Banner;

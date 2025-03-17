"use client"
// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { kameron, libre } from '@/app/fonts'
import Button from '../Button/buton';

const Banner: React.FC = () => {
  return (
    <div className="w-full h-full items-center flex justify-evenly  my-8">
      <div>
        <div className='gap-16'>
          <h3 className={`${kameron.className} text-4xl text-amber-950`}>O Poder de uma pele</h3>
          <h1 className={`${libre.className} text-6xl text-amber-50`}>Bem Cuidada</h1>
          <h3 className={`${kameron.className} text-4xl text-amber-950`}>  Começa aqui!</h3>

          <div>
            <button
              onClick={() => alert('Banner clicado!')}
              className="bg-white text-blue-500 px-4 py-2 rounded"
            >
              Clique aqui
            </button>
          </div>
        </div>
      </div>
      <Image
        src="/imgBodyApresent.svg"
        alt="banner .img"
        width={300}
        height={700} />



    </div>
  );
};

export default Banner;

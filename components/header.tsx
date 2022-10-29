import Image from 'next/image';
import nextLogo from '../public/nextjs.svg';

export default function Header() {
  return (
    <header className="flex flex-row justify-between">
      <div className="h-10 w-10 pointer-events-none relative">
        <Image src={nextLogo} alt="Next.js logo" />
      </div>
      <p>Next.js Template</p>
    </header>
  );
}

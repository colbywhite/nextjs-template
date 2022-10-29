import Image from 'next/image';
import githubLogo from '../public/github.png';

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between">
      <p>
        Created by{' '}
        <a href="https://github.com/colbywhite">Colby M. White</a>
      </p>
      <a href="https://github.com/colbywhite/nextjs-template">
        <div className="h-5 w-5 pointer-events-none relative">
          <Image src={githubLogo} alt="GitHub logo" />
        </div>
      </a>
    </footer>
  );
}

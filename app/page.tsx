import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex flex-col gap-5 justify-between">
      <p>
        This is a starting template for a <code>create-next-app</code> project with what I consider a sane set of
        starting settings.
      </p>
      <ul className="list-disc">
        <li>The basic &quot;Hello, World&quot; page you&apos;re looking at now</li>
        <li><code>tailwindcss</code></li>
        <li>Simple header/footer layout</li>
        <li>Image usage</li>
      </ul>
    </main>
  );
};

export default Home;

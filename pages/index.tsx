import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from '../public/nextjs.svg';

function Header() {
  return (
    <Box component="header" className="flex flex-row justify-center">
      <Image src={logo} className="h-28 pointer-events-none" alt="logo"/>
    </Box>
  );
}


const Home: NextPage = () => {
  return (
    <Container className="max-w-xl">
      <Header/>
      <Container component="main" className="flex flex-col gap-5 justify-between">
        <Typography variant="body1">
          This is a starting template for a <code>create-next-app</code> project with what I consider a sane set of
          starting settings.
        </Typography>
        <ul className="list-disc">
          <li>The basic &quot;Hello, World&quot; page you&apos;re looking at now</li>
          <li><code>material-ui</code> components</li>
          <li>A two-color theme:&nbsp;
            <Chip color="primary" label="primary"></Chip>
            &nbsp;
            <Chip color="secondary" label="secondary"></Chip>
          </li>
          <li>CSS reset via <code>CssBaseline</code></li>
          <li><code>tailwindcss</code></li>
        </ul>
      </Container>
    </Container>
  );
};

export default Home;

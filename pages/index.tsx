import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const Home: NextPage = () => {
  const [name, setName] = useState('World');
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(({name}) => setName(name));
  }, []);
  return (
    <>
      <Header/>
      <main>
        <Typography variant="h1" gutterBottom>Lorem Ipsum</Typography>

        <Card component="section">
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>{name}</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non malesuada nisl.
            </Typography>
          </CardContent>
        </Card>
      </main>
      <Footer/>
    </>
  );
};

export default Home;

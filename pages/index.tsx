import type { NextPage } from 'next'
import { useEffect } from 'react';
import {Movie, Response} from '../utils/interfaces';

const API_KEY = '450a2d1267e0aaf9403bcd16120a9e62';

const Home: NextPage = () => {
  useEffect(()=>{
    (async ()=>{
      const res = await fetch(`/movie/popular?API_KEY=${API_KEY}`);
      const results: Response<Movie> = res.json();

    })();
  },[]);

  return (
    <div className='home'>
      HOME !!
      <style jsx>{`
        .home {

        }
      `}</style>
    </div>
  )
}



export default Home;

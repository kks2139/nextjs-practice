import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import {Movie, Response} from '../utils/interfaces';

const API_KEY = '450a2d1267e0aaf9403bcd16120a9e62';

const Home: NextPage = () => {
  const [list, setList] = useState<Movie[]>([]);

  useEffect(()=>{
    (async ()=>{
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const data: Response<Movie> = await res.json();
      setList(data.results);
    })();
  },[]);

  return (
    <div className='home'>
      {list.map(mv => (
        <div key={mv.id}>{mv.original_title}</div>
      ))}
      <style jsx>{`
        .home {

        }
      `}</style>
    </div>
  )
}



export default Home;

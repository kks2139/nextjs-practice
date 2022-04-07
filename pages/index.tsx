import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Slider from '../components/Slider';
import {Movie, Response} from '../utils/interfaces';

const API_KEY = '450a2d1267e0aaf9403bcd16120a9e62';

interface Props {
  popular: Movie[]
  upcoming: Movie[]
}

function Home({popular, upcoming}: Props){
  return (
    <div className='home'>
      <section className='section'>
        <Slider>
          {popular.map(mv => (
            <MovieCard key={mv.id} movie={mv}/>
          ))}
        </Slider>
      </section>


      {/* <ul className='movie-list'>
        {popular.map(mv => (
          <MovieCard key={mv.id} movie={mv}/>
        ))}
      </ul>

      upcoming...          
      <ul className='movie-list'>
        {upcoming.map(mv => (
          <MovieCard key={mv.id} movie={mv}/>
        ))}
      </ul> */}
      <style jsx>{`
        .movie-list {
          display: flex;
          width: 900px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .section {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
  const data: Response<Movie> = await res.json();
  const data2: Response<Movie> = await res2.json();

  return {
    props: {
      popular: data.results,
      upcoming: data2.results,
    }
  }
}

export default Home;

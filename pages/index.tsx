import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Panel from '../components/Panel';
import Slider from '../components/Slider';
import { request } from '../utils/api';
import {Movie, Response} from '../utils/interfaces';

interface Props {
  popular: Movie[]
  upcoming: Movie[]
}

function Home({popular, upcoming}: Props){
  const router = useRouter();

  return (
    <div className='home'>
      <div className='title-box'>
        <h1 className='tit'>MOVIE INFORMATION</h1>
        <h2 className='sub-tit'>Look for information about the movie information !</h2>
      </div>

      <Panel title='Most Popular'>
        <Slider>
          {popular.map(mv => (
            <Link key={mv.id} href={`movie/${mv.id}`}>
              <a>
                <MovieCard movie={mv}/>
              </a>
            </Link>
          ))}
        </Slider>
      </Panel>
      
      <Panel title='Upcomings'>
        <Slider>
          {upcoming.map(mv => (
            <Link key={mv.id} href={`movie/${mv.id}`}>
              <a>
                <MovieCard movie={mv}/>
              </a>
            </Link>
          ))}
        </Slider>
      </Panel>


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
        .title-box {
          text-align: center;
          margin: 20px 0 50px 0;
          .tit {
            font-size: 40px;
          }
          .sub-tit {
            color: gray;
            font-size: 20px;
            font-weight: normal;
          }
        }
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
  const popular = await request<Movie[]>("getPopularList");
  const upcoming = await request<Movie[]>("getUpcomingList");

  return {
    props: {
      popular,
      upcoming,
    }
  }
}

export default Home;

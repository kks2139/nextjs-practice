import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import {Movie, Response} from '../utils/interfaces';

const API_KEY = '450a2d1267e0aaf9403bcd16120a9e62';

interface Props {
  results: Movie[]
}

function Home({results}: Props){
  // 아래 방식은 페이지 렌더링 후 프론트에서 fetching 하는 방식
  // const [list, setList] = useState<Movie[]>([]);
  // useEffect(()=>{
  //   (async ()=>{
  //     const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  //     const data: Response<Movie> = await res.json();
  //     setList(data.results);
  //   })();
  // },[]);

  return (
    <div className='home'>
      <ul className='movie-list'>
        {results.map(mv => (
          <MovieCard key={mv.id} movie={mv}/>
        ))}
      </ul>
      <style jsx>{`
        .movie-list {
          display: flex;
          width: 900px;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  )
}

// getServerSideProps --> 서버에서 실행되는 코드.
// 서버에서 실행되기 때문에 보안에 안전하고
// 주로 DB에서 바로 데이터를 가져오거나 외부api fetching 데이터를 return 해준다.
// props 프로퍼티 값을 return 해주면 위 페이지 함수에서 인자로 받게된다.
// 이처럼 서버단에서 html과 데이터 매핑까지 완성해서 
// 클라이언트로 응답을 보내주기 때문에 pre-rendering 이라고 한다.
// 또 브라우저 소스보기를 통해 확인해보면 데이터들이 html 에 매핑되어있다.
// 이는 검색에도 유리하다 = SEO
// 다만, getServerSideProps 에서 실행하는 fetch가 오래걸린다면
// 그만큼 유저는 페이지를 받을때까지 아무반응없는 화면을 보고있게 된다.
// 그러니 SSR 과 CSR 을 상황에 따라 적절히 선택해 렌더링을 수행하자.
export async function getServerSideProps(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const data: Response<Movie> = await res.json();
  return {
    props: {
      results: data.results
    }
  }
}

export default Home;

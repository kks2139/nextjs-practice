import {Constraint} from '../utils/interfaces';

export const API_KEY = '450a2d1267e0aaf9403bcd16120a9e62';
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export async function request<Data>(apiName: string, param?: string) {
    const apiMap: Constraint<{url: string, resultName: string}> = {
        getPopularList: {
            url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            resultName: 'results'
        },
        getUpcomingList: {
            url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
            resultName: 'results'
        },
        getDetail: {
            url: `https://api.themoviedb.org/3/movie/${param}?api_key=${API_KEY}`,
            resultName: ''
        },
        getGenre: {
            url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
            resultName: 'genres'
        },
    }
    if(!apiMap[apiName]){
        return null;
    }

    const result = await fetch(apiMap[apiName].url);

    if(result.ok){
        const data = await result.json();
        const name = apiMap[apiName].resultName;
        if(name){
            return data[name] as Data;
        }else{
            return data as Data;
        }
    }else{
        alert("요청중 문제가 발생하였습니다.");
        return null;
    }
}
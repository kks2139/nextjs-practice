import {Movie} from '../utils/interfaces';
import {GiRoundStar} from 'react-icons/gi';
import {GoPencil} from 'react-icons/go';
import {FcCalendar} from 'react-icons/fc';
import Tooltip from './Tooltip';
import { useEffect, useRef } from 'react';

interface Props {
    movie: Movie
    moved?: number
}

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const PADDING = 5;
const WIDTH = 200;

function MovieCard({movie, moved=0}: Props){
    const tooltipText = `Overview : 
    ${movie.overview}`;
    const liRef = useRef<HTMLLIElement>(null);
    const position = moved * (2 * PADDING + WIDTH);

    useEffect(()=>{
        // liRef.current!.transform = moved
    }, [moved]);
    
    return (
        <li className='movie-wrapper' ref={liRef} style={{transform: `translateX(-${position})`}}>
            <Tooltip text={tooltipText}>
                <div className="movie-box">
                    <img src={IMG_BASE_URL + movie.poster_path || ''} alt={movie.original_title}></img>
                    <div className="info">
                        <h4 className="title">{movie.original_title}</h4>
                        {/* <div>{movie.release_date}</div> */}
                        <div className='gray font-small'>
                            {movie.release_date}
                        </div>
                        <div className='foot gray font-small'>
                            <div>
                                <GiRoundStar color='#ffb100'/>
                                <span>{movie.vote_average}</span>
                            </div>
                            <div>
                                <GoPencil color='#0072ff'/>
                                <span>{movie.vote_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Tooltip>
            <style jsx>{`
                .movie-wrapper {
                    transition: .2s;
                    padding: ${PADDING}px;
                }
                .movie-box {
                    position: relative;
                    border-radius: 10px;
                    overflow: hidden;
                    width: ${WIDTH}px;
                    height: 420px;
                    box-shadow: 0 0 30px -15px black;
                    transition: .2s;
                    cursor: pointer;
                    &:hover {
                        transform: translateY(-8px);
                        .overview {
                            display: block;
                        }
                    }
                }
                img {
                    width: 200px;
                    height: 300px;
                    object-fit: cover;
                }
                .info {
                    padding: 10px;
                    .title {
                        margin-bottom: 5px;
                    }
                }
                .gray {
                    color: gray;
                }
                .font-small {
                    font-size: 14px;
                }
                .foot {
                    position: absolute;
                    bottom: 12px;
                    display: flex;
                    justify-content: space-between; 
                    width: calc(100% - 30px);
                    span {
                        margin-left: 5px;
                    }
                }
                .overview {
                    display: none;
                    position: absolute;
                    width: 300px;
                    height: 200px;
                    background-color: white;
                    left: 50%;
                    top: 50%;
                    box-shadow: 0 0 40px -15px black;
                    border-radius: 10px;
                    padding: 20px;
                    animation: showup .5s forwards;
                }
                @keyframes showup {
                    from {
                        opacity: 0;
                        transform: translate(-50%, 0%);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -30%);
                    }
                }
            `}</style>
        </li>
    );
}

export default MovieCard;
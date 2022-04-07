import {Movie} from '../utils/interfaces';
import {GiRoundStar} from 'react-icons/gi';
import {GoPencil} from 'react-icons/go';
import {FcCalendar} from 'react-icons/fc';
import Tooltip from './Tooltip';

interface Props {
    movie: Movie
}

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({movie}: Props){
    const tooltipText = `Overview : 
    ${movie.overview}`;

    return (
        <li>
            <Tooltip text={tooltipText}>
                <div className="img-box">
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
                <style jsx>{`
                    .img-box {
                        position: relative;
                        width: 200px;
                        height: 420px;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: -15px -15px 40px -35px black, 10px 10px 40px -35px black;
                        margin: 5px;
                        transition: .2s;
                        cursor: pointer;
                        &:hover {
                            transform: translateY(-6px);
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
            </Tooltip>
        </li>
    );
}

export default MovieCard;
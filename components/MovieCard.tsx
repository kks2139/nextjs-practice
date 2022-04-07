import {Movie} from '../utils/interfaces';
import {GiRoundStar} from 'react-icons/gi';
import {GoPencil} from 'react-icons/go';
import {FcCalendar} from 'react-icons/fc';

interface Props {
    movie: Movie
}

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({movie}: Props){
    return (
        <li>
            <div className="img-box">
                <img src={IMG_BASE_URL + movie.poster_path || ''} alt={movie.original_title}></img>
                <div className="info">
                    <h4 className="title">{movie.original_title}</h4>
                    <div>
                        <FcCalendar/>
                        {movie.release_date}
                    </div>
                    <div>
                        <GiRoundStar color='#ffb100'/>
                        {movie.vote_average}
                    </div>
                    <div>
                        <GoPencil color='#0072ff'/>
                        {movie.vote_count}
                    </div>
                </div>
                <div className='overview'>{movie.overview}</div>
            </div>
            <style jsx>{`
                .img-box {
                    position: relative;
                    /* border: 1px solid red; */
                    display: flex;
                    width: 400px;
                    height: 300px;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: -15px -15px 40px -35px black, 10px 5px 40px -35px black;
                    margin: 5px;
                    &:hover {
                        .overview {
                            display: block;
                        }
                    }
                }
                img {
                    width: 200px;
                }
                .info {
                    padding: 10px;
                    .title {
                        
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
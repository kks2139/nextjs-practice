import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import { IMG_BASE_URL, request } from "../../utils/api";
import {Genre, MovieDetail, Movie, Review} from '../../utils/interfaces';

interface Props {
    data: MovieDetail
    genres: Genre[]
    reviews: Review[]
    similars: Movie[]
}

function Detail({data, genres, reviews, similars}: Props){
    const genreFiltered = data.genres.filter(a => genres.find(b => a.id === b.id));
    
    useEffect(()=>{
        // debugger;
        // console.log(genres);
        // console.log(reviews);
        // console.log(similars);

    }, []);

    return (
        <div className="movie-detail-box">
            {/* {genres[0].id} */}
            <section className="intro-box">
                <div className="wrapper">
                    <div className="poster">
                        <img src={IMG_BASE_URL + data.poster_path} alt={data.title}></img>
                        <div className="cover">
                            Click to Zoom.
                        </div>
                    </div>
                    <div className="info-box">
                        <h1>{data.original_title}</h1>
                        <div className="text">{data.release_date}</div>
                        <h2>Genre</h2>
                        <div className="text">
                            {genreFiltered.map(gr => (
                                <span className="genre">{gr.name}</span>
                            ))}
                        </div>
                        <h2>Overview</h2>
                        <div className="text">{data.overview}</div>
                    </div>
                </div>
            </section>
            <section>
                {reviews.map(rv => (
                    <div key={rv.id} className="test">
                        <div>{rv.author}</div>
                        <div>{rv.content}</div>
                    </div>
                ))}
            </section>
            <style jsx>{`
                .movie-detail-box {
                    --radius: 15px;
                }
                .intro-box {
                    position: relative;
                    display: flex;
                    width: 100%;
                    background-image: url(${IMG_BASE_URL + data.poster_path});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }
                .wrapper {
                    display: flex;
                    justify-content: center;
                    padding: 50px 50px 50px 60px;
                    width: 100%;
                    height: 700px;
                    color: white;
                    backdrop-filter: brightness(0.3);
                }
                .info-box {
                    width: 600px;
                    margin-left: 50px;
                    .text {
                        margin: 15px 0 30px 0;
                    }
                }
                .poster {
                    position: relative;
                    height: 100%;
                    border-radius: var(--radius);
                    box-shadow: 0 0 30px 0 black;
                    transition: .2s;
                    img {
                        height: 100%;
                        object-fit: contain;
                        border-radius: var(--radius);
                    }
                    .cover {
                        position: absolute;
                        top: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: var(--radius);
                        width: 100%;
                        height: 100%;
                        font-size: 20px;
                        background-color: #000000b2;
                        opacity: 0;
                        transition: .2s;
                        cursor: pointer;
                    }
                    &:hover {
                        box-shadow: 0 0 30px -10px white;
                        .cover {
                            opacity: 1;
                        }
                    }
                }
                .genre {
                    &:not(:last-child)::after {
                        content: ' / ';
                        margin: 0 8px;
                    } 
                }
            `}</style>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async ()=>{
    const result = await request<Movie[]>("getPopularList");
    const paths = !result ? [] : result.map(res => {
        return {
            params: {
                id: res.id + ''
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx)=>{
    const {params} = ctx;
    const id = params!.id as string;

    const data = await request<Movie>("getDetail", id);
    const genres = await request<Genre[]>("getGenre");
    const reviews = await request<Review[]>("getReviewList", id);
    const similars = await request<Movie[]>("getSimilarList", id);

    return {
        props: {
            data,
            genres,
            reviews,
            similars,
        },
        revalidate: 60
    }
}

export default Detail;
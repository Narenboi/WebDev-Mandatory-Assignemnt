// TvShowCard.js
import React from 'react';
import { useDispatch } from 'react-redux';

function TvShowCard({ tvShow }) {
    const dispatch = useDispatch();

   /* const handlePlayClick = () => {
    };
*/

    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    // Check if tvShow and tvShow.poster_path exist before accessing poster_path
    const posterPath = tvShow && tvShow.poster_path ? posterBasePath + tvShow.poster_path : '';

    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                {posterPath && <img src={posterPath} className="card-img-top" alt="..." />}
                <div className="card-body">
                    <h5 className="card-title "><span>{tvShow.name.substring(0, 200)}</span></h5>
                    <span className="far fa-star" aria-hidden="true"></span>
                    <span className="ml-1">{tvShow.vote_average}</span>
                    <p className="card-text">{tvShow.overview.substring(0, 125).concat('....')}</p>

                    <div className="d-flex justify-content-between p-0">
                        <span className="far fa-calendar" aria-hidden="true"> {tvShow.first_air_date}</span>
                       {/* <span className="far fa-play-circle" onClick={handlePlayClick}></span>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TvShowCard;

import MovieImg from '../assets/Image/movie_black2.jpg';

function Home() {
    return (
        <div className='container text-center'>
            <div className='Logo'>MovieLookUP</div>
            <img className="rounded movie_img" src={MovieImg} width="450" height="450"/>
            <div className='Logo2 mt-5' >by Lucas Havenkvist</div>
        </div>
    )
}

export default Home;
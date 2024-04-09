import { useFetchPopularTVShowsQuery } from "../store";
import TvShowCard from "./TvShowCard"; // Import TvShowCard instead of MovieCard

function TvSeries() {
  const { data, error, isFetching } = useFetchPopularTVShowsQuery();

  let content;
  if (isFetching) {
    content = <div>Loading;</div>;
  } else if (error) {
    content = <div>Error loading TV series.</div>;
  } else {
    if (!data || !data.results) {
      content = <div>No TV series found.</div>;
    } else {
      content = data.results.map((tvShow) => {
        if (tvShow.poster_path) {
          return <TvShowCard key={tvShow.id} tvShow={tvShow} />; // Render TvShowCard component
        } else {
          return null;
        }
      });
    }
  }

  return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default TvSeries;

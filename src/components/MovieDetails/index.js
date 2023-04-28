import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();

  function findMovie(movie) {
    return movie.id.toString() === movieId;
  }

  const movieChoice = movies.find(findMovie);

  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;

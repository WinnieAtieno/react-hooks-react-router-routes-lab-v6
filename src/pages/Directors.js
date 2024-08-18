import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])
  // get the directors
  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((directorData) => setDirectors(directorData));
  }, []);

  const  directorList = directors.map((director)=>{
    const directorMovies = director.movies;
    const directorMovieList = directorMovies.map((movie, index)=>{
      return <li key={index}>{movie}</li>
    });
     return(
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>{directorMovieList}</ul>
      </article>
     )
  })
  
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;

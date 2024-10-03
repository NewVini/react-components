
import React, { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);



  return (
    <div>
      <h1>Listagem e Busca de Filmes</h1>
      {loading ? <p>Carregando...</p> : <>iuu</>}
    </div>
  );
};

export default MoviePage;

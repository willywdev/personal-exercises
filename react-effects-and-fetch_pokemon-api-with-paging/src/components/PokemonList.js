import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState([
    "https://pokeapi.co/api/v2/pokemon?offset=0",
  ]);
  const [data, setData] = useState(null);

  const handleNextPage = () => {
    if (data) {
      setPage(data.next);
    }
  };

  const handlePreviousPage = () => {
    if (data) {
      setPage(data.previous);
    }
  };

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(`${page}`);
        const data = await response.json();
        console.log(data);
        setData(data);
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      <button type="button" onClick={handlePreviousPage}>
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

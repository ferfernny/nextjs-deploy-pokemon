'use client';

import { useQuery } from "@apollo/client";
import { useSearchParams } from 'next/navigation';
import { GET_POKEMON_SUMMARY } from "../../graphql/queries";
import { Pokemon } from "./types";
import PokemonSummary from './pokemonSummary';
import PokemonAttacks from './pokemonAttack';
import PokemonEvolutions from './pokemonEvolution';
import Link from 'next/link';

const pokemonPages = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const { loading, error, data } = useQuery(GET_POKEMON_SUMMARY, {
    variables: { name: name as string },
    skip: !name,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const pokemon: Pokemon = data?.pokemon;

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className="white-background">
      <Link href="/">
        <h1 className="green-button">
          Search pokemon
        </h1>
      </Link>
      <PokemonSummary pokemon={pokemon} />
      <PokemonAttacks pokemonAttack={pokemon.attacks} />
      {pokemon.evolutions && pokemon.evolutions.length > 0 && (
        <PokemonEvolutions 
            pokemonName={pokemon.name} 
            evolutionDetail = {pokemon.evolutions} 
        />
      )}
    </div>
  );
};

export default pokemonPages;

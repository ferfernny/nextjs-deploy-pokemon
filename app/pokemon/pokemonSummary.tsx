import React from 'react';
import { Pokemon } from './types';
import Image from 'next/image';

interface PokemonSummaryProps {
pokemon: Pokemon;
}

const PokemonSummary: React.FC<PokemonSummaryProps> = ({ pokemon }) => {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl semi-bold-grey">
            {pokemon.name} #{pokemon.number}
          </h2>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="semi-bold-grey-xl">Classification</h3>
            <p className="text-gray-600">{pokemon.classification}</p>
          </div>
  
          <div>
            <h3 className="semi-bold-grey-xl">Types</h3>
            <ul className="flex flex-wrap gap-2">
              {pokemon.types.map((type) => (
                <li
                  key={type}
                  className="blue-oval-block"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="mt-6">
          <h3 className="semi-bold-grey-xl">Physical Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div>
              <p className="text-gray-600">Weight</p>
              <p className="semi-bold-grey">
                {pokemon.weight.minimum} - {pokemon.weight.maximum}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Height</p>
              <p className="semi-bold-grey">
                {pokemon.height.minimum} - {pokemon.height.maximum}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Flee Rate</p>
              <p className="semi-bold-grey">{pokemon.fleeRate}</p>
            </div>
            <div>
              <p className="text-gray-600">Max CP</p>
              <p className="semi-bold-grey">{pokemon.maxCP}</p>
            </div>
            <div>
              <p className="text-gray-600">Max HP</p>
              <p className="semi-bold-grey">{pokemon.maxHP}</p>
            </div>
          </div>
        </div>
  
        <div className="mt-6">
          <h3 className="semi-bold-grey-xl">Resistances</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {pokemon.resistant.map((resistance) => (
              <li
                key={resistance}
                className="green-oval-block"
              >
                {resistance}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="mt-6">
          <h3 className="semi-bold-grey-xl">Weaknesses</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {pokemon.weaknesses.map((weakness) => (
              <li
                key={weakness}
                className="red-oval-block"
              >
                {weakness}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default PokemonSummary;
  
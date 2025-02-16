'use client';
import React from 'react';
import Link from 'next/link';
import { EvolutionDetail } from './types';

interface PokemonEvolutionProps {
pokemonName: string;
evolutionDetail: EvolutionDetail[]
}

const PokemonEvolution: React.FC<PokemonEvolutionProps> = ({ pokemonName,  evolutionDetail}) => {
if (!evolutionDetail || evolutionDetail.length === 0) {
    return <p>No evolutions.</p>;
}

return (
    <div className="mt-10">
        <div className="text-center">
        <h3 className="pink-red-interesting-text">
            Evolutions of {pokemonName}
        </h3>
        </div>
        <ul className="divide-y divide-gray-800">
        {evolutionDetail.map((evolution) => (
            <li key={evolution.id} className="flex items-center space-x-4">
            <Link href={`/pokemon?name=${evolution.name.toLowerCase()}`}>
                <img
                src={evolution.image}
                alt={evolution.name}
                className="w-48 h-48 object-contain rounded-full border-2 border-gray-300"
                />
                <div>
                <div className="mt-5"></div>
                <h4 className="semi-bold-grey-lg">{evolution.name} #{evolution.number}</h4>
                <p className="text-gray-600">Classification: {evolution.classification}</p>
                <p className="text-gray-600">Types: {evolution.types.join(', ')}</p>
                <div className="mt-2">
                <p className="semi-bold-grey">Resistances</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {evolution.resistant.map((resistant) => (
                    <li key={resistant} className="green-oval-block">
                        {resistant}
                    </li>
                    ))}
                </ul>
                <p className="semi-bold-grey">Weaknesses</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {evolution.weaknesses.map((weakness) => (
                    <li key={weakness} className="red-oval-block">
                        {weakness}
                    </li>
                    ))}
                </ul>
                </div>
                <p className="text-gray-600">Flee rate: {evolution.fleeRate}</p>
                <p className="text-gray-600">Max CP: {evolution.maxCP}</p>
                <p className="text-gray-600">Max HP: {evolution.maxHP}</p>
                <div className="mt-5"></div>
                </div>
            </Link>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default PokemonEvolution;
  
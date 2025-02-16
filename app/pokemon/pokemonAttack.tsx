import React from 'react';
import { AttackRating } from './types';

interface PokemonAttackProps {
pokemonAttack: AttackRating;
}

const pokemonAttack: React.FC<PokemonAttackProps> = ({ pokemonAttack }) => {

return (
    <div className="mt-6">
        <h3 className="semi-bold-grey-xl">Attacks</h3>
        <div className="mt-4">
            <h4 className="semi-bold-grey-lg">Fast Attacks</h4>
            <ul className="list-disc pl-6 space-y-2">
            {pokemonAttack.fast.map((attack) => (
                <li key={attack.name} className="text-gray-600">
                <span className="font-medium">{attack.name}</span> ({attack.type}) -{" "}
                <span className="semi-bold-blue">Damage: {attack.damage}</span>
                </li>
            ))}
            </ul>
        </div>

        <div className="mt-4">
            <h4 className="semi-bold-grey-lg">Special Attacks</h4>
            <ul className="list-disc pl-6 space-y-2">
            {pokemonAttack.special.map((attack) => (
                <li key={attack.name} className="text-gray-600">
                <span className="font-medium">{attack.name}</span> ({attack.type}) -{" "}
                <span className="semi-bold-blue">Damage: {attack.damage}</span>
                </li>
            ))}
            </ul>
        </div>
    </div>
    );
};

export default pokemonAttack;
  
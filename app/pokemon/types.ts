

interface Range{
    minimum: string;
    maximum: string;
}

interface AttackDescription{
    name: string;
    type: string; 
    damage: number;
}

export interface Pokemon {
    id: string;
    number: string;
    name: string;
    weight: Range;
    height: Range;
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    image: string;
    attacks: AttackRating
    evolutions: EvolutionDetail[];
    }

export interface AttackRating{
    fast: AttackDescription[];
    special: AttackDescription[];
}

export interface EvolutionDetail {
    id: string;
    number: string;
    name: string;
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    image: string;
}

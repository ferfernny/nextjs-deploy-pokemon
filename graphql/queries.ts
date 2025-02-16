import { gql } from "@apollo/client";

export const GET_POKEMON_SUMMARY = gql`
  query pokemon($id: String, $name: String!){
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
      
      attacks{
        fast{
          name
          type
          damage
        }
        special{
          name
          type
          damage
        }
      }
      evolutions{
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  }
`
;
import CharacterCard from "./CharacterCard";
import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        species
        isSpaceshipPassenger @client
      }
    }
  }
`;

export default function CharacterGrid() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="grid grid-cols-fill-auto gap-[20px]">
      {data.characters.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

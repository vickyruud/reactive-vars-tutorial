import React from "react";
import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { spaceshipPassengersVar } from "../client";

export const GET_PASSENGERS = gql`
  query GetPassengers {
    characters {
      results {
        id
        image
        isSpaceshipPassenger @client
      }
    }
  }
`;

export default function SpaceshipPassengers() {
  const passengers = useReactiveVar(spaceshipPassengersVar);

  const { data, loading, error } = useQuery(GET_PASSENGERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 100px)",
        gap: 20,
      }}
    >
      {passengers.map((charId) => {
        const character = data.characters.results.find(
          (char) => char.id === charId
        );
        return (
          <div key={character.id} className="avatar">
            <div className="rounded-[50%] border-4 border-teal-600 ">
              <img src={character.image} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

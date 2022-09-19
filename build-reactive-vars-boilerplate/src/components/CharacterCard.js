import React from "react";
import { spaceshipPassengersVar } from "../client";

export default function CharacterCard({ character }) {
  return (
    <div
      key={character.id}
      className="flex flex-col p-[12px] border-[2px] border-teal-400"
    >
      <div className="avatar">
        <div className="rounded-xl">
          <img className="w-full" src={character.image} alt={character.name} />
        </div>
      </div>

      <div>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </div>
      <button
        className="btn btn-primary rounded-full bg-teal-700 mt-auto"
        onClick={() => {
          const currentPassengers = spaceshipPassengersVar();
          spaceshipPassengersVar(
            character.isSpaceshipPassenger
              ? currentPassengers.filter(
                  (characterId) => characterId !== character.id
                )
              : [...currentPassengers, character.id]
          );
        }}
      >
        {character.isSpaceshipPassenger ? "Remove from" : "Add to"} Spaceship
      </button>
    </div>
  );
}

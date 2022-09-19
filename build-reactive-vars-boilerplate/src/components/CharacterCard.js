import React from "react";
import { spaceshipPassengersVar } from "../client";

export default function CharacterCard({ character }) {
  return (
    <div
      key={character.id}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 12,
        border: "2px solid #80acbb",
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100%" }}
      />
      <div>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </div>
      {/* STEP 1 */}
      <button
        style={{ marginTop: "auto" }}
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

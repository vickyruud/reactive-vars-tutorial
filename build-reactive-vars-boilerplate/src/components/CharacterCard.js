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
      <div className="avatar">
        <div className="rounded-xl">
          <img
            src={character.image}
            alt={character.name}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </div>
      <button
        className="btn btn-primary rounded-full bg-teal-700"
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

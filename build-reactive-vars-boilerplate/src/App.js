import CharacterGrid from "./components/CharacterGrid";
import React from "react";
import SpaceshipPassengers from "./components/SpaceshipPassengers";

export default function App() {
  return (
    <>
      <div className="border-[#92c5dd]-700 border-4 rounded-[16px] mb-[16px] py-[24px] px-[16px]">
        <h2 style={{ fontFamily: "Helvetica" }}>Spaceship passengers</h2>
        <SpaceshipPassengers />
      </div>
      <CharacterGrid />
    </>
  );
}

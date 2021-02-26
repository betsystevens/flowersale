import React, { useEffect } from "react";
import Hero from "./Hero";
import FlowerGroups from "./FlowerGroups";

export default function HomePage() {
  useEffect(() => {
    document.title = "Flower Sale - Home";
  });
  return (
    <>
      <Hero />
      <FlowerGroups />
    </>
  );
}

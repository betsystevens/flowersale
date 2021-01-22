import React from "react";
// import { FLOWERS } from "../shared/flowers";
import { GROUPS } from "../shared/groups";

// component lays out top level groups of flowers, hb, flats, pots, herbs
function FlowerGroups() {
  const group = GROUPS.map((flower) => {
    return (
      <div key={flower.id} className="band shadow">
        <img src={flower.image} alt={flower.name} />
        <div className="band-body">
          <p className="text-xl font-semibold">{flower.name}</p>
          <p className="pt-4">{flower.description}</p>
        </div>
      </div>
    );
  });
  return <div className="outer">{group}</div>;
}

export default FlowerGroups;

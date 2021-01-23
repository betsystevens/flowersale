import React from "react";
import { Link } from "react-router-dom";
import { GROUPS } from "../shared/groups";

// component lays out top level groups of flowers, hb, flats, pots, herbs
function FlowerGroups() {
  const group = GROUPS.map((flower) => {
    return (
      <Link to={`/${flower.group}`}>
        <div
          key={flower.id}
          className="flex flex-nowrap p-5 mx-20 my-12 shadow"
        >
          <div className="flex-shrink-0">
            <img src={flower.image} alt={flower.name} className="w-56 h-36" />
          </div>
          <div className="flex-col pl-5">
            <p className="text-xl font-semibold">{flower.name}</p>
            <p className="pt-4">{flower.description}</p>
          </div>
        </div>
      </Link>
    );
  });
  return <div className="outer">{group}</div>;
}

export default FlowerGroups;

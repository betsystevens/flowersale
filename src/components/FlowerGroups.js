import React from "react";
import { Link } from "react-router-dom";
import { GROUPS } from "../shared/groups";

// component lays out top level groups of flowers, hb, flats, pots, herbs
function FlowerGroups() {
  const group = GROUPS.map((flower) => {
    return (
      <Link to={`/${flower.group}`} key={flower.id}>
        <div className="flex flex-col sm:flex-row p-5 mx-4 sm:mx-20 my-12 shadow">
          <div className="flex-shrink-0 self-center sm:self-start">
            <img
              src={flower.image}
              alt={flower.name}
              className="w-64 h-48 sm:w-56 sm:h-36 mb-2"
            />
          </div>
          <div className="flex flex-col pl-5">
            <p className="self-center sm:self-start text-xl font-semibold">
              {flower.name}
            </p>
            <p className="pt-4 hidden md:block md:self-start">
              {flower.description}
            </p>
            <p className="pt-4 block md:hidden self-center md:self-start">
              {flower.shortDescription}
            </p>
          </div>
        </div>
      </Link>
    );
  });
  return <div className="outer">{group}</div>;
}

export default FlowerGroups;

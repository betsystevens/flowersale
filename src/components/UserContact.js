import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const UserContact = ({ user, setUser }) => {
  const [first, setFirst] = useState(user ? user.first : "");
  const [last, setLast] = useState(user ? user.last : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [address, setAddress] = useState(user ? user.address : "");
  const [tel, setTel] = useState(user ? user.tel : "");
  const [scout, setScout] = useState(user ? user.scout : "");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setUser({ first, last, email, address, tel, scout });
    setSaved(true);
  };

  if (saved) return <Redirect to="/printOrder" />;
  else {
    return (
      <div className="min-h-screen p-8 mb-20 flex flex-col justify-center items-center">
        <p>Customer and Scout Information</p>
        <div className="flex flex-col mt-16 mb-4 font-medium">
          <p>First Name</p>
          <input
            className="border rounded py-2 px-3"
            size="40"
            type="text"
            name="first"
            id="first"
            value={first || ""}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium">
          <p>Last Name</p>
          <input
            className="border rounded py-2 px-3"
            size="40"
            type="text"
            name="last"
            id="last"
            value={last || ""}
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium">
          <p>Email</p>
          <input
            className="border rounded py-2 px-3"
            size="40"
            type="email"
            name="email"
            id="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium">
          <p>Address</p>
          <input
            className="border rounded py-2 px-3"
            size="40"
            type="text"
            name="address"
            id="address"
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium">
          <p>Telephone</p>
          <input
            className="border rounded py-2 px-3"
            size="40"
            type="tel"
            name="tel"
            id="tel"
            value={tel || ""}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium">
          <p>Scout Name</p>
          <input
            className="border rounded py-2 px-3"
            size="40"
            type="scout"
            name="scouttel"
            id="scouttel"
            value={scout || ""}
            onChange={(e) => setScout(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-evenly mt-12">
          <Link to={"/printOrder"}>
            <button
              className="bg-gray-100 hover:bg-purple-100 text-lg py-2 px-4 rounded"
              type="reset"
            >
              Cancel
            </button>
          </Link>
          <button
            className="bg-gray-100 hover:bg-purple-100 text-lg py-2 px-4 rounded"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
};

export default UserContact;

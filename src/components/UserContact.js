import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const CustomerForm = ({ user, setUser }) => {
  const [first, setFirst] = useState(user ? user.first : "");
  const [last, setLast] = useState(user ? user.last : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [address, setAddress] = useState(user ? user.address : "");
  const [tel, setTel] = useState(user ? user.tel : "");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setUser({ first, last, email, address, tel });
    setSaved(true);
  };

  if (saved) return <Redirect to="/printOrder" />;
  else {
    return (
      <div className="bg-blue-100 p-8 flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col mb-4 font-medium text-lg">
          <p>First Name</p>
          <input
            className="border py-2 px-3 text-grey-darkest"
            size="40"
            type="text"
            name="first"
            id="first"
            value={first || ""}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium text-lg">
          <p>Last Name</p>
          <input
            className="border py-2 px-3 text-grey-darkest"
            size="40"
            type="text"
            name="last"
            id="last"
            value={last || ""}
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium text-lg">
          <p>Email</p>
          <input
            className="border py-2 px-3 text-grey-darkest"
            size="40"
            type="email"
            name="email"
            id="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium text-lg">
          <p>Address</p>
          <input
            className="border py-2 px-3 text-grey-darkest"
            size="40"
            type="text"
            name="address"
            id="address"
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4 font-medium text-lg">
          <p>Telephone</p>
          <input
            className="border py-2 px-3 text-grey-darkest"
            size="40"
            type="tel"
            name="tel"
            id="tel"
            value={tel || ""}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-evenly mt-12">
          <button
            className="bg-gray-100 hover:bg-purple-100 text-lg py-2 px-4 rounded"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
          <Link to={"/printOrder"}>
            <button
              className="bg-gray-100 hover:bg-purple-100 text-lg py-2 px-4 rounded"
              type="reset"
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default CustomerForm;

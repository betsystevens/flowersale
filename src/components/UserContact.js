import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomerForm = ({ user, setUser }) => {
  const [first, setFirst] = useState(user ? user.first : "");
  const [last, setLast] = useState(user ? user.last : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [tel, setTel] = useState(user ? user.tel : "");

  const handleSave = () => {
    setUser({ first, last, email, tel });
  };
  return (
    <div className="bg-blue-100 p-8 flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col mb-4">
        <label
          className="mb-2 uppercase font-medium text-lg text-grey-darkest"
          for="first"
        >
          First Name
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest"
          size="40"
          type="text"
          name="first"
          id="first"
          value={first}
          onInput={(e) => setFirst(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label
          className="mb-2 uppercase font-medium text-lg text-grey-darkest"
          for="last"
        >
          Last Name
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest"
          size="40"
          type="text"
          name="last"
          id="last"
          value={last}
          onInput={(e) => setLast(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label
          className="mb-2 uppercase font-medium text-lg text-grey-darkest"
          for="email"
        >
          Email
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest"
          size="40"
          type="email"
          name="email"
          id="email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label
          className="mb-2 uppercase font-medium text-lg text-grey-darkest"
          for="tel"
        >
          Telephone
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest"
          size="40"
          type="tel"
          name="tel"
          id="tel"
          value={tel}
          onInput={(e) => setTel(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-evenly mt-12">
        <Link to={"/home"}>
          <button
            className="bg-gray-100 hover:bg-purple-100 text-lg py-2 px-4 rounded"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </Link>
        <button
          className="bg-gray-100 hover:bg-purple-100 text-lg py-2 px-4 rounded"
          type="reset"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CustomerForm;

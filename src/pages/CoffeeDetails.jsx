import React from "react";
import { useLoaderData, Link } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, supplies, taste, details, photo } = coffee;
  console.log(coffee);
  return (
    <div className="min-h-md bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl">
        <Link
          to="/"
          className="text-blue-600 text-lg font-semibold mb-4 inline-block"
        >
          ← Back to home
        </Link>

        <div className="bg-[#F4F3F0] p-6 rounded-md shadow-md flex flex-col md:flex-row items-center border border-blue-300">
          <img
            src={photo}
            alt={name}
            className="w-64 h-64 object-contain mb-6 md:mb-0 md:mr-10"
          />

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[#6C3A2D] mb-2">
              Niceties
            </h2>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Chef:</strong> {chef}
            </p>
            <p>
              <strong>Supplier:</strong> {supplies
}
            </p>
            <p>
              <strong>Taste:</strong> {taste}
            </p>
            <p>
              <strong>Category:</strong> Coffee
            </p>
            <p>
              <strong>Details:</strong> {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

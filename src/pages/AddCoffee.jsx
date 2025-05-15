import React from "react";
import coffeeBgImg from "/images/more/1.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const coffeeBg = {
    backgroundImage: `url(${coffeeBgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            //   position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div style={coffeeBg}>
      <div className="w-11/12 mx-auto">
        <Link to="/">
          <button className="cursor-pointer flex items-center lg:my-10 gap-1 text-2xl font-bold">
            <IoIosArrowRoundBack size={30} />
            Back to home
          </button>
        </Link>
        <div className="bg-[#F4F3F0] lg:p-24 p-4 lg:my-10 my-2">
          <div className="text-center space-y-3 my-5">
            <h1 className="text-2xl font-bold">Add New Coffee</h1>

            <p>
              It is a long established fact that a reader will be distraceted by
              the readable content of <br /> a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less{" "}
              <br /> normal distribution of letters, as opposed to using Content
              here.
            </p>
          </div>
          <form onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl">
              <fieldset className=" bg-base-200 border-base-300 p-2">
                <label className="">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter coffee name"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300 p-2">
                <label className="">Supplier</label>
                <input
                  type="text"
                  name="supplies"
                  className="input w-full"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300 p-2 ">
                <label className="">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input w-full"
                  placeholder="Coffee Price"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300  p-2">
                <label className="">Chef</label>
                <input
                  type="text"
                  name="chef"
                  className="input w-full"
                  placeholder="Enter coffee chef"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300  p-2">
                <label className="">Taste</label>
                <input
                  type="text"
                  name="taste"
                  className="input w-full"
                  placeholder="Enter coffee taste"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300 p-2">
                <label className="">Details</label>
                <input
                  type="text"
                  name="details"
                  className="input w-full"
                  placeholder="Enter coffee details"
                />
              </fieldset>
            </div>
            <fieldset className=" bg-base-200 border-base-300 p-2">
              <label className="">Photo</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter photo URL"
              />
            </fieldset>
            <input
              type="submit"
              className="btn w-full bg-[#D2B48C] p-2"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;

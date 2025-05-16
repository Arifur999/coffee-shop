import React from "react";
import { Link, useLoaderData } from "react-router";
import coffeeBgImg from "/images/more/1.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeBg = {
    backgroundImage: `url(${coffeeBgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const UpdateCoffee = useLoaderData();
  const { _id, name,supplies, photo, price,taste, chef,details} = UpdateCoffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
fetch(`https://my-first-sarver.vercel.app/coffees/${_id}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updatedCoffee)
})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount){
        Swal.fire({
  icon: "success",
  title: "Coffee Updated Successfully",
  showConfirmButton: false,
  timer: 1500
});
    }
})
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
            <h1 className="text-4xl font-bold">
              Update Existing Coffee Details
            </h1>

            <p className="text-xl">
              It is a long established fact that a reader will be distraceted by
              the readable content of <br /> a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less{" "}
              <br /> normal distribution of letters, as opposed to using Content
              here.
            </p>
          </div>
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl">
              <fieldset className=" bg-base-200 border-base-300 p-2">
                <label className="">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input w-full"
                  placeholder="Enter coffee name"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300 p-2">
                <label className="">Supplier</label>
                <input
                  type="text"
                  name="supplies"
                  defaultValue={supplies}
                  className="input w-full"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300 p-2 ">
                <label className="">Price</label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  className="input w-full"
                  placeholder="Coffee Price"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300  p-2">
                <label className="">Chef</label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  className="input w-full"
                  placeholder="Enter coffee chef"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300  p-2">
                <label className="">Taste</label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  className="input w-full"
                  placeholder="Enter coffee taste"
                />
              </fieldset>
              <fieldset className=" bg-base-200 border-base-300 p-2">
                <label className="">Details</label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
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
                defaultValue={photo}
                className="input w-full"
                placeholder="Enter photo URL"
              />
            </fieldset>
            <input
              type="submit"
              className="btn w-full bg-[#D2B48C] p-2"
              value="Update Coffee Details"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;

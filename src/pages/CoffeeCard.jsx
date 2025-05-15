import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, photo, price, chef } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
            fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
location.reload()


    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm  p-4 w-full">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-around w-full mt-5">
        <div className="space-y-2">
          <h2 className="card-title">Name : {name}</h2>
          <h2 className="card-title">Chef : {chef}</h2>
          <h2 className="card-title">Price : {price} Taka</h2>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <Link to={`/coffee/${_id}`}>
            <button className="btn join-item rounded bg-[#D2B48C] text-white">
              <FaEye size={20} />
            </button>
            </Link>
            <Link to={`/update-coffee/${_id}`}>
            <button className="btn join-item rounded bg-[#3C393B] text-white">
              <MdEdit size={20} />
            </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item rounded bg-[#EA4744] text-white"
            >
              <MdDelete size={20} />
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

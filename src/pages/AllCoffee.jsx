import coffeeBgImg from "/images/more/1.png";
import { BsCupFill } from "react-icons/bs";
import { Link } from "react-router";
import CoffeeCard from "./CoffeeCard";

const AllCoffee = ({coffees}) => {
  const coffeeBg = {
    backgroundImage: `url(${coffeeBgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // height: "100vh",
    // width: "100%",
  };
  return (
    <div className="" style={coffeeBg}>
      <div className=" w-11/12 mx-auto flex flex-col justify-center text-center items-center my-12 space-y-2">
        <p className="text-xl">--- Sip & Savor ---</p>
        <h1 className="text-4xl font-bold text-[#331A15]">
          Our Popular Products
        </h1>
        <Link to='/add-coffee'>
        <h3 className="flex justify-center items-center text-white  bg-[#E3B577] py-1 w-[150px] px-2 rounded gap-1 cursor-pointer border border-[#E3B577] hover:bg-white hover:text-black">
          Add Coffee <BsCupFill />
        </h3>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-10/12 mx-auto">
        {
          coffees.map(coffee=><CoffeeCard  key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default AllCoffee;

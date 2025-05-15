import { useLoaderData } from "react-router";
import AllCoffee from "./AllCoffee";
import Hero from "./Hero";
import InstragramSec from "./InstragramSec";

const Home = () => {
        const coffees= useLoaderData();

  return (
    <>
      <div >
        <Hero></Hero>
        <AllCoffee coffees={coffees}></AllCoffee>
        <InstragramSec></InstragramSec>
      </div>
    </>
  );
};

export default Home;

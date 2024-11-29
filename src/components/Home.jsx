import { useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-6xl mt-20 text-center">
        Hot Coffee {coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

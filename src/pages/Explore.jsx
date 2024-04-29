import { useState } from "react";
import FoodDisplay from "../components/FoodDisplay";
import Header from "../components/Header";
import MenuExplore from "../components/MenuExplore";

export default function Explore() {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Header />
      <MenuExplore category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </>
  );
}

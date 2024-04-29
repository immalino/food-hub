import { useContext } from "react";
import FoodItem from "./FoodItem";
import { StoreContext } from "../context/StoreContext";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <main className="px-5">
      <div>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                tags={item.tags}
              />
            );
          }
        })}
      </div>
    </main>
  );
}

import { useContext } from "react";
import FoodItem from "../components/FoodItem";
import { StoreContext } from "../context/StoreContext";

export default function Favorit() {
  const { favoriteItems, addFavoriteItems, food_list } =
    useContext(StoreContext);

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-start px-5">
      <div className="w-full">
        <h1 className=" text-center text-xl font-medium">Favorite</h1>
      </div>
      <div className="mt-5 h-full w-full">
        {food_list.map((item, index) => {
          if (favoriteItems[item._id]) {
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
    </div>
  );
}

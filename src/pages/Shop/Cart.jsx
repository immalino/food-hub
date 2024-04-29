import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function Cart() {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 grid-rows-2 items-center justify-center">
          <div className="row-span-2 h-[82px] w-[82px] rounded-[20px] overflow-hidden">
            <img src={food_list[0].image} alt="" className="w-full h-full object-cover"/>
          </div>

          <div className="col-span-2 flex">
            <div>
              <h2>Red n hot pizza</h2>
              <p>Spicy chiken,beff</p>
            </div>
            <div>x</div>
          </div>
          <div className="col-span-2">
            <h2>15.30</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

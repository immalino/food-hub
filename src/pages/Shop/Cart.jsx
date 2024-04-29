import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { IoIosClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Cart() {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 grid-rows-2 items-center justify-center">
          <div className="row-span-2 h-[82px] w-[82px] overflow-hidden rounded-[20px]">
            <img
              src={food_list[0].image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-2 flex justify-between">
            <div>
              <h2 className="font-semibold">Red n hot pizza</h2>
              <p className="text-sm text-grey">Spicy chiken,beff</p>
            </div>
            <div className="hover:te mt-[2px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-orange hover:bg-orange hover:text-white">
              <IoIosClose className="text-2xl" />
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-between text-orange">
            <h2 className="mt-2 text-lg font-semibold">
              <span className="text-base">$</span>15.30
            </h2>
            <div className="flex items-center justify-center gap-1">
              <div className="flex h-7 w-7 items-center justify-center rounded-[50%] border border-orange bg-white text-orange">
                <FaMinus />
              </div>
              <p>02</p>
              <div className="flex h-7 w-7 items-center justify-center rounded-[50%] border border-orange bg-orange text-white">
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

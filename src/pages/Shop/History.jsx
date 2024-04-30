import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { GoDotFill } from "react-icons/go";

export default function Cart() {
  const {
    food_list,
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    removeFromCart,
  } = useContext(StoreContext);

  const [pay, setPay] = useState({
    subTotal: 0,
    taxAndFees: 0,
    delivery: 5.3,
    total: 0,
  });

  useEffect(() => {
    const calculatedSubTotal = food_list.reduce((acc, item) => {
      if (cartItems[item._id] > 0) {
        return acc + item.price * cartItems[item._id];
      }
      return acc;
    }, 0);

    setPay({
      ...pay,
      subTotal: calculatedSubTotal,
      delivery: Object.keys(cartItems).length * 0.5,
      taxAndFees: calculatedSubTotal * 0.1,
      total: calculatedSubTotal + pay.taxAndFees + pay.delivery,
    });
  }, [cartItems, food_list, pay.delivery, pay.taxAndFees]);

  const updateSubTotal = (newSubTotal) => {
    setPay({
      ...pay,
      subTotal: newSubTotal,
    });
  };

  const formatNumber = (num) => {
    return num % 1 === 0 ? num.toFixed(0) : num.toFixed(1);
  };

  const isEmptyCart = Object.keys(cartItems).length === 0;

  return (
    <div className="">
      {isEmptyCart ? (
        <div className="mt-72 flex  w-full items-center justify-center text-center">
          There is no item in your cart
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col gap-3 ">
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div className="flex flex-wrap items-center  justify-between gap-3 rounded-[20px] bg-white px-2 py-2">
                    {/* image container */}
                    <div className="row-span-3 h-[90px] w-[90px] overflow-hidden rounded-[20px]">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex h-[90px] flex-1 flex-col justify-evenly px-1">
                      {/* 1  */}
                      <div className="col-span-2 flex justify-between">
                        <div className="flex items-center justify-center gap-1 text-sm text-grey">
                          <p className="">20 Jun, 10:30</p>
                          <GoDotFill className=" " />
                          <p>2 items</p>
                        </div>

                        <div className="text-lg font-semibold text-orange">
                          <h2>$12</h2>
                        </div>
                      </div>
                      {/* 2 */}
                      <div>
                        <h2 className="font-semibold">Id : #340420</h2>
                      </div>
                      {/* 3 */}
                      <div className="col-span-2 flex gap-1 items-center text-orange">
                        <GoDotFill />
                        <p>Order delivered</p>
                      </div>
                    </div>

                    {/* 4 */}
                    <div className="col-span-3 flex flex-1 justify-around px-6">
                      <div className="flex h-[43px] w-[135px] cursor-pointer items-center justify-between rounded-full border border-grey-50 bg-white p-2">
                        <div className="flex flex-1 items-center justify-center text-sm font-medium tracking-widest text-orange">
                          See detail
                        </div>
                      </div>
                      <div className="flex h-[43px] w-[135px] cursor-pointer items-center justify-between rounded-full bg-orange p-2">
                        <div className="flex flex-1 items-center justify-center text-sm font-medium tracking-widest text-white">
                          Re-order
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

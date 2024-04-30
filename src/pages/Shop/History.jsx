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
    orderHistory,
  } = useContext(StoreContext);

  const formatNumber = (num) => {
    return num % 1 === 0 ? num.toFixed(0) : num.toFixed(1);
  };

  const isEmptyHistory = Object.keys(orderHistory).length === 0;

  return (
    <div className="">
      {isEmptyHistory ? (
        <div className="mt-72 flex  w-full items-center justify-center text-center">
          There is no item in your history
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col gap-5 ">
            {orderHistory.map((item) => {
              if (orderHistory) {
                return (
                  <div
                    key={item.id}
                    className="flex flex-wrap items-center  justify-between gap-3 rounded-[20px] bg-white px-2 py-2"
                  >
                    {/* image container */}
                    <div className="row-span-3 h-[90px] w-[90px] overflow-hidden rounded-[20px]">
                      <img
                        src={food_list[Object.keys(item.item)[0] - 1].image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex h-[90px] flex-1 flex-col justify-evenly px-1">
                      {/* 1  */}
                      <div className="col-span-2 flex justify-between">
                        <div className="flex flex-col items-start md:items-center justify-center md:gap-2 text-sm text-grey md:flex-row">
                          <p className="">{item.date}</p>
                          <div className="flex justify-start items-center gap-2">
                            <GoDotFill className=" " />
                            <p>
                              {Object.keys(item.item).length}{" "}
                              {Object.keys(item.item).length <= 1
                                ? "item"
                                : "items"}
                            </p>
                          </div>
                        </div>

                        <div className="text-lg font-semibold text-orange">
                          <h2>${item.total}</h2>
                        </div>
                      </div>
                      {/* 2 */}
                      <div>
                        <h2 className="font-semibold">Id : #{item.id}</h2>
                      </div>
                      {/* 3 */}
                      <div className="col-span-2 flex items-center gap-1 text-orange">
                        <GoDotFill />
                        <p>Order delivered</p>
                      </div>
                    </div>

                    {/* 4 */}
                    <div className="col-span-3 flex flex-1 justify-around px-6">
                      <div className="flex h-[43px] w-full cursor-pointer items-center justify-between rounded-full border border-grey-50 bg-white p-2 text-orange hover:bg-orange hover:text-white sm:min-w-[200px]">
                        <div className="flex flex-1 items-center justify-center text-sm font-medium tracking-widest ">
                          See detail
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

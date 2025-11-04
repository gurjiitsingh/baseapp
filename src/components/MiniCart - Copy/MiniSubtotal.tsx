"use client";

import React, { useContext } from "react";
import CartContext from "@/store/CartContext";
import { useLanguage } from '@/store/LanguageContext';
import { formatCurrencyNumber } from "@/utils/formatCurrency";
import { UseSiteContext } from "@/SiteContext/SiteContext";
export const MiniCartSubtotal = () => {
  const { TEXT } = useLanguage();
  const { cartData } = useContext(CartContext);
  //console.log("in the subtoal");
  //console.log(cartData);

//   let total = 0;
//   if (cartData.length > 0) {
//   cartData.forEach((element) => {
//     total += element.quantity * parseFloat(element.price);
//   });
// }


const total = cartData.reduce((sum, item) => {
  return sum + item.quantity * parseFloat(String(item.price));
}, 0);

const totalFormatted = total.toFixed(2);
  //after discount

  //const discountedPrice = total-(total*0.1)
  const { settings } = UseSiteContext();

  const total_amount = formatCurrencyNumber(
    Number(totalFormatted) ?? 0,
    settings.currency as string,
    settings.locale as string
  );

  return (
    <div className="">
      <div className="w-full flex flex-col gap-3 bg-slate-50  rounded-xl py-3 justify-between mt-5 ">
        <div className="w-full flex gap-3   by-2 p-2 justify-start">
          <div>Total</div>
          <div className=" text-red-600"> {total_amount} </div>
          <div className="text-sm">
           {TEXT.discount_hint_checkout || "See discount at checkout"}
            {/* line-through */}
            {/* {discountedPrice.toFixed(2)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

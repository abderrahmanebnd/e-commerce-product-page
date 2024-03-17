import { useState } from "react";
import { CardProvider, useCard } from "./CardProvider";
import Main from "./Main";
import Header from "./Header";

export const PRICE = (250).toFixed(2);
export const OFFER = 50;
export const CUR_PRICE = Math.round(PRICE * (OFFER / 100)).toFixed(2);

export default function App() {
  return (
    <CardProvider>
      <Header />
      <Main />
    </CardProvider>
  );
}

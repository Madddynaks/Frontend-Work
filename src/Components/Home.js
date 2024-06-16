import React from "react";
import Narrow from "../Common/Narrow";
import NavigationBar from "./NavigationBar";

export default function Home() {
  return (
    <>
    <div className="bg-head h-[450px] bg-black bg-opacity-50 bg-cover bg-right flex items-end">
      <Narrow>
        <div className="text-white font-bold text-6xl">
          Computer Engineering
        </div>
        <div className="text-white text-2xl">
        142,765 Computer Engineers follow this
        </div>
      </Narrow>
    </div>
    <Narrow>
        <NavigationBar/>
    </Narrow>
    </>
  );
}

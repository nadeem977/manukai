import React from "react";
import dyamiimg from "../assets/img/dyami.png"
 
const Usersms = ({text}) => {
  return (
    <>
      <div className="flex items-center gap-3 pl-1 w-full mt-4">
        <img src={dyamiimg} alt="icons" />
        <h1 className="text-[16px] mt-1">{text}</h1>
      </div>
    </>
  );
};
export default Usersms;

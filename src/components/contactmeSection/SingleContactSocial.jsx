import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange-2 text-orange-2 rounded-full p-3 flex items-center justify-center hover:scale-[110%] hover:border-cyan hover:text-cyan">
      <a href={link} className="cursor-pointer" target="_blank">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;

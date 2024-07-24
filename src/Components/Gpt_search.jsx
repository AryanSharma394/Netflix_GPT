import React from "react";
import Gpt_Searchbar from "./Gpt_Searchbar";
import Gpt_moviesuggestions from "./Gpt_moviesuggestions";
import { useSelector } from "react-redux";

const Gpt_search = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img 
          className="md:h-full md:w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <Gpt_Searchbar />
      <Gpt_moviesuggestions />
   </>
  );
};

export default Gpt_search;

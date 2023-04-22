import React,{useState} from "react";

const Pagination = ({ pageProp, goBack, goAhead }) => {
 

  return (
    <div className="flex justify-center w-full mb-8">
      <button className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl" 
      onClick={goBack}
      >
        Previous
      </button>
      <button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-300">
        {pageProp}
      </button>
      <button className="p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl" 
      onClick={goAhead}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

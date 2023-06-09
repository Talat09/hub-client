import React, { useState } from "react";
import { useQuery } from "react-query";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PartsCard from "../PartsCard/PartsCard";
import axiosPrivate from "../../api/axiosPrivate";
const FeatureParts = () => {
  // const [page, setPage] = useState(0);
  // const [size, setSize] = useState(4);

  // const getParts = async ({ queryKey }) => {
  //   const { data } = await axiosPrivate.get(
  //     `products.json/parts?page=${queryKey[1]}&size=${queryKey[2]}`
  //   );
  //   return data;
  // };
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("products.json");
      const data = await res.json();
      return data;
    },
  });

  // console.log(products?.length);
  return (
    <div className="max-w-7xl mx-auto px-7 lg:px-10 mt-14 mb-10">
      <div className="flex justify-between items-center border-b-2">
        <h4 className="text-3xl text-neutral font-semibold">
          Featured Products
        </h4>
        <div id="featured" className="flex items-center ">
          <button className="btn btn-secondary btn-xs">All</button>
          <button className="btn btn-link btn-xs text-white p-1 px-2 ml-1 ">
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className="btn btn-link btn-xs text-white p-1 px-2 ml-1 hover:bg-primary">
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-7 mt-8">
        {products?.map((parts) => (
          <PartsCard parts={parts} />
        ))}
      </div>
    </div>
  );
};

export default FeatureParts;

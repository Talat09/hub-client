import React from "react";
import axiosPrivate from "../../api/axiosPrivate";
import { useQuery } from "react-query";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import PartsCard from "../PartsCard/PartsCard";

const BestSeller = () => {
  const getParts = async () => {
    const { data } = await axiosPrivate.get(
      `http://localhost:5000/parts?page=0&size=10}`
    );
    return data;
  };
  const { data, isLoading } = useQuery(["three-parts"], getParts, {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid lg:grid-cols-3 gap-7">
      {data?.data?.slice(3, 6).map((item) => (
        <PartsCard parts={item} />
      ))}
    </div>
  );
};

export default BestSeller;

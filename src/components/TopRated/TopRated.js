import React from "react";
import axiosPrivate from "../../api/axiosPrivate";
import { useQuery } from "react-query";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import PartsCard from "../PartsCard/PartsCard";

const TopRated = () => {
  const getParts = async () => {
    const { data } = await axiosPrivate.get(
      `https://parts-bd-inc-server.vercel.app/parts?page=0&size=10}`
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
      {data?.data?.slice(0, 3).map((item) => (
        <PartsCard parts={item} />
      ))}
    </div>
  );
};

export default TopRated;

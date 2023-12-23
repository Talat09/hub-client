import React from "react";
import SetTitle from "../Shared/SetTitle/SetTitle";
import axiosPrivate from "../../api/axiosPrivate";
import { useQuery } from "react-query";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import ReactStars from "react-rating-stars-component";
const Reviews = () => {
  const getReviews = async () => {
    const { data } = await axiosPrivate.get("http://localhost:5000/review");
    return data;
  };

  const { data, isLoading } = useQuery("reviews", getReviews);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="max-w-7xl mx-auto mb-20 px-6 lg:px-10 mt-6 my-16 py-8">
      <SetTitle title={"Reviews"} />
      <h2 className="text-4xl text-center font-semibold text-white">
        Customers Review
      </h2>
      <p className="text-center text-gray-400 text-xl">
        What our customers say!
      </p>
      <div className="grid lg:grid-cols-3 gap-x-10 gap-y-5 mt-8">
        {data.map((review, index) => (
          <div className="rounded-2xl border-2 border-primary bg-white flex items-center gap-5 p-5">
            <div class="avatar">
              <div class="w-14 rounded-full">
                <img
                  src={`https://picsum.photos/200/300?random=${index}`}
                  alt="user"
                />
              </div>
            </div>
            <div>
              <p>{review.description}</p>
              <p>
                <ReactStars count={review.rating} size={24} color="#ffd700" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

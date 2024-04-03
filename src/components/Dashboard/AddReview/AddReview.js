import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import axiosPrivate from "../../../api/axiosPrivate";
import SetTitle from "../../Shared/SetTitle/SetTitle";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
const AddReview = () => {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(0);

  const reviewHandle = async (e) => {
    e.preventDefault();
    const description = e.target.ratingDes.value;
    const review = {
      user: user.email,
      rating,
      description,
    };

    const { data } = await axiosPrivate.post(
      "https://tools-master-server.vercel.app/review",
      review
    );
    if (data.success) {
      e.target.reset();
      toast.success(data.message);
    }
  };
  return (
    <div>
      <SetTitle title={"Add Review"} />
      <h2 className="text-2xl font-bold pt-4 pl-10 mb-2 text-primary">
        Add Review
      </h2>
      <hr className="border-[#21252c] h-[4px] mb-6 w-full" />
      <form
        onSubmit={(e) => reviewHandle(e)}
        className="card max-w-sm lg:max-w-sm shadow border-none"
      >
        <div className="mb-4 pl-10">
          <label className="font-bold text-primary">Ratings</label>
          <ReactStars
            count={5}
            onChange={setRating}
            size={24}
            activeColor="#00BF63"
          />
          <label className="font-bold block mt-2 text-primary">
            Description
          </label>

          <textarea
            name="ratingDes"
            cols="30"
            rows="5"
            className="border-[1px] rounded-lg text-black mt-2 pl-4 pt-2"
          ></textarea>
        </div>
        <button className="btn btn-primary text-white w-fit my-4 ms-6">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;

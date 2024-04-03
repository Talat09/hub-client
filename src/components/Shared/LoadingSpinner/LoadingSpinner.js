import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        style={{ borderTopColor: "transparent" }}
        class="w-12 h-12 border-4 border-primary border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default LoadingSpinner;

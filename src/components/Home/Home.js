import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Subscription from "../Subscription/Subscription";
import Blog from "../Blog/Blog";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Testimonial from "../Testimonial/Testimonial";
import FeatureParts from "../FeatureParts/FeatureParts";
import Offers from "../Offers/Offers";
import LastSixReview from "../LastSixReview/LastSixReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <FeatureParts></FeatureParts>
      <Offers />
      <Testimonial></Testimonial>
      <LastSixReview></LastSixReview>
      <BusinessSummary></BusinessSummary>
      <Blog></Blog>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;

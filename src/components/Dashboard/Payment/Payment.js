import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../../api/axiosPrivate";
import { PartsIdContext } from "../../../App";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import SetTitle from "../../Shared/SetTitle/SetTitle";

const Payment = () => {
  const { id } = useParams();
  const { setPartsId } = useContext(PartsIdContext);
  setPartsId(id);

  const getOrder = async ({ queryKey }) => {
    const { data } = await axiosPrivate.get(
      `https://tools-master-server.vercel.app/order/${queryKey[1]}`
    );
    console.log(data);
    return data;
  };
  const { data, isLoading } = useQuery(["single-order", id], getOrder);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  const { name, partsName, quantity, amount } = data;

  const stripePromise = loadStripe(
    "pk_test_51MijiRJNxVPgVSwFCmB4sQnzSXw51Rhza5d7J5zDenN5EoXcEATUAMZwD3thnfO0W7kcBNGYWiNACbMcz50SDlVT009o2HG3Oz"
  );

  return (
    <div>
      <SetTitle title={"Payment"} />
      <div class="card w-96 bg-base-100 shadow-lg">
        <div class="card-body pt-4">
          <h2 class="card-title text-success">Hello, {name}</h2>
          <p className="text-black font-bold">
            Your order:{" "}
            <span className="text-primary font-bold">{partsName}</span>
          </p>
          <p className="text-black font-bold">
            Quantity:{" "}
            <span className="text-primary font-bold">{quantity} Piece</span>
          </p>
          <p className="text-black font-bold">
            Amount to pay:{" "}
            <span className="text-primary font-bold">${amount}</span>
          </p>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-lg mt-6">
        <div class="card-body pt-4">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

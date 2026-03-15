// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ course }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const finalPrice = course.discount
    ? (course.price - (course.price * course.discount) / 100).toFixed(2)
    : course.price;

  const handlePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const paidCourses = JSON.parse(
        localStorage.getItem("paidCourses") || "{}",
      );
      paidCourses[course.id] = true;
      localStorage.setItem("paidCourses", JSON.stringify(paidCourses));

      setIsProcessing(false);
      setSuccess(true);

      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            navigate(`/course/${course.id}`);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Payment Successful! 🎉
          </h1>
          <p className="text-gray-700 mb-6">
            You have successfully enrolled in{" "}
            <span className="font-semibold">{course.title}</span>.
          </p>
          <p className="text-gray-500">
            Redirecting you to the course in{" "}
            <span className="font-bold">{countdown}</span> seconds...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 p-6 text-white">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <p className="mt-1">
            Complete your payment for{" "}
            <span className="font-semibold">{course.title}</span>
          </p>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* Cart */}
          <div className="border p-6 rounded-xl shadow-sm bg-gray-50">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <div className="flex justify-between mb-2">
              <span>{course.title}</span>
              <span className="font-semibold text-red-600">${finalPrice}</span>
            </div>
            {course.discount > 0 && (
              <div className="flex justify-between mb-2">
                <span>Discount</span>
                <span className="text-green-600 font-semibold">
                  -{course.discount}%
                </span>
              </div>
            )}
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${finalPrice}</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="border p-6 rounded-xl shadow-sm bg-gray-50 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
            <div className="flex flex-col gap-4">
              <label
                className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${
                  paymentMethod === "card"
                    ? "border-red-600 bg-red-50"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="accent-red-600"
                />
                <div>
                  <p className="font-semibold">Credit / Debit Card</p>
                  <p className="text-sm text-gray-500">
                    Visa, MasterCard, Mada
                  </p>
                </div>
              </label>

              <label
                className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer ${
                  paymentMethod === "vodafone"
                    ? "border-red-600 bg-red-50"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="vodafone"
                  checked={paymentMethod === "vodafone"}
                  onChange={() => setPaymentMethod("vodafone")}
                  className="accent-red-600"
                />
                <div>
                  <p className="font-semibold">Vodafone Cash</p>
                  <p className="text-sm text-gray-500">
                    Pay via your Vodafone Wallet
                  </p>
                </div>
              </label>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="mt-6 w-full bg-red-600 hover:bg-black text-white py-3 rounded-lg font-semibold transition"
            >
              {isProcessing ? "Processing..." : `Pay $${finalPrice}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

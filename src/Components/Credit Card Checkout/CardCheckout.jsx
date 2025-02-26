import React, { useState } from "react";
import { FaCcVisa, FaPaypal } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QhrdlGRr2USsb15b5SNd4DJS8nk5083J1DHGiLE1YbJCO9YBPvT9yMxhvzucsIaH4SPf4gE2tc2BMd9BMKbwRvI00OjzDdxVL");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!stripe || !elements) return;

    const response = await fetch("https://dailyui-sigma.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Math.round(amount * 100) }),
    });

    const { clientSecret } = await response.json();
    const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (confirmPayment.error) {
      setError(confirmPayment.error.message);
    } else {
      setSuccess("Payment successful!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white p-4">
      <div className="bg-[#161616] p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
        <p className="text-gray-400 text-sm mb-4">Complete your purchase by providing your payment details</p>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-[#272a34] text-white px-4 py-2 rounded-lg flex items-center gap-2 px-8 justify-center">
            <FaCcVisa /> Pay by Card
          </button>
          <button className="flex-1 bg-[#161616] text-gray-400 px-4 py-2 rounded-lg flex items-center gap-2 justify-center">
            <FaPaypal /> Pay with PayPal
          </button>
        </div>

        <div className="bg-[#1d1d28] p-3">
          <label className="block text-sm mb-1 text-[#5c5e6b]">Email address</label>
          <input
            type="email"
            placeholder="hello@123d.one"
            className="w-full bg-[#161616] p-2 rounded-lg mb-3 outline-none"
          />

          <label className="block text-sm mb-1 text-[#5c5e6b]">Card details</label>
          <div className="bg-[#161616] p-3 rounded-lg mb-3">
            <CardElement className="w-full" />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4">
          <label className="block text-sm mb-1 text-[#5c5e6b]">Enter Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#161616] p-2 rounded-lg mb-3 outline-none text-white"
          />

          <div className="flex justify-between text-lg font-semibold mt-2">
            <span>Total</span>
            <span>${amount.toFixed(2)}</span>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

        <button
          onClick={handleSubmit}
          disabled={!stripe || loading}
          className="w-full bg-blue-600 text-white p-3 mt-4 rounded-lg font-semibold"
        >
          {loading ? "Processing..." : `Pay $${amount.toFixed(2)}`}
        </button>

        <p className="text-gray-500 text-center text-sm mt-3">🔒 Payments are secure and encrypted</p>
      </div>
    </div>
  );
};

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeWrapper;

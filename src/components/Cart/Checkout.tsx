import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "white",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState<string | number | null>(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e: any) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details: any) => {
    console.log("Payment Successful", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6 ">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4 ">Contact Details</h3>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="" className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                placeholder="Enter your first name"
                value={shippingAddress.firstName}
                required
              />
            </div>
            <div className="">
              <label htmlFor="" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                placeholder="Enter your last name"
                value={shippingAddress.lastName}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  })
                }
                placeholder="Enter address"
                value={shippingAddress.address}
                required
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="">
                <label htmlFor="" className="block text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setShippingAddress({
                      ...shippingAddress,
                      city: e.target.value,
                    })
                  }
                  placeholder="Enter your city"
                  value={shippingAddress.city}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="" className="block text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setShippingAddress({
                      ...shippingAddress,
                      postalCode: e.target.value,
                    })
                  }
                  placeholder="Enter your postal code"
                  value={shippingAddress.postalCode}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Country
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              placeholder="Enter country"
              value={shippingAddress.country}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              placeholder="Enter Phone Number"
              value={shippingAddress.phone}
              required
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Continue to Payment
              </button>
            ) : (
              <div className="">
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                {/* paypal component */}
                <PayPalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment Failed. Try Again")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div className="">
                    <h3 className="text-md">{product.name}</h3>
                    <p className="text-gray-500">Size: {product.size}</p>
                    <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
                <p className="text-xl">$ {product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-lg mb-4">
            <p className="">Subtotal</p>
            <p className="">${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
            <p className="">Shipping</p>
            <p className="">free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
        <p className="">Total</p>
        <p className="">${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import Modal from "react-modal";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import Link from "next/link";

Modal.setAppElement("#__next");

function CartModal({ isOpen, onRequestClose }) {
  const [activeTab, setActiveTab] = useState("carts");
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useCart();
  console.log("User cart:", cart);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      overlayClassName="ReactModal__Overlay"
      contentLabel="Cart Modal"
    >
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Giỏ hàng</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-red-500"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <div
              key={index}
              className="cart-item flex flex-wrap md:flex-nowrap justify-between items-center py-4"
            >
              <div className="flex items-center w-full md:w-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">
                    Đơn giá: {item.price.toLocaleString("vi-VN")} đồng
                  </p>
                </div>

                <div></div>
              </div>
              <div className="cart-item-actions flex items-center justify-center w-full md:w-auto md:mt-0 mt-4">
                <button
                  onClick={() => decreaseQuantity(item)}
                  className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded px-2 py-1"
                >
                  -
                </button>
                <span className="mx-2 text-gray-700">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item)}
                  className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded px-2 py-1"
                >
                  +
                </button>
              </div>
              <div className="text-right w-full md:w-auto md:mt-0 mt-4">
                <span className="text-lg font-semibold">
                  {item.quantity * item.price.toLocaleString("vi-VN")} đồng
                </span>{" "}
                <button
                  onClick={() => removeProduct(item)}
                  className="block text-red-500 hover:text-red-700 mt-2"
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mb-4">
          <p className="text-lg font-semibold">
            Tổng cộng:{" "}
            {cart
              .reduce((total, item) => total + item.quantity * item.price, 0)
              .toLocaleString("vi-VN")}{" "}
            đồng
          </p>
        </div>
        <div className="mt-4">
          <Link href="/products">
            <button
              onClick={onRequestClose}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
            >
              Tiếp tục mua hàng
            </button>
          </Link>

          <Link href="/pay" className="">
            <button className="w-full bg-orange-500 hover:bg-green-600 text-white font-semibold py-2 rounded mt-4">
              Thanh toán
            </button>
          </Link>

          {cart.length === 0 && (
            <div className="text-center py-4">
              <p className="text-gray-500">
                Giỏ hàng trống. Hãy thêm sản phẩm vào giỏ hàng!
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default CartModal;

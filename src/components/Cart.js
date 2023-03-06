import React from "react";
import { Offcanvas } from "react-bootstrap";
import { CartItemsCard } from "./CartItemsCard";
import { FormateCurrency } from "./FormateCurrency";
import { useShoopingCart } from "./shoopingContext/Context";

export const Cart = () => {
  const { handleClose, show, cartItems,totalPrice } = useShoopingCart();

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>ITEMS</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => {
          return <CartItemsCard key={item.id} {...item} />;
        })}
        {
          <div className="text-end">
            Total{" "}
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              {FormateCurrency( totalPrice)}
            </span>
          </div>
        }
      </Offcanvas.Body>
    </Offcanvas>
  );
};

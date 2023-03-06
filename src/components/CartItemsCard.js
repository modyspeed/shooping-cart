import React from "react";
import { Button, Stack } from "react-bootstrap";
import items from "./data/Items..json";
import { FormateCurrency } from "./FormateCurrency";
import { useShoopingCart } from "./shoopingContext/Context";
export const CartItemsCard = ({ id, quantity }) => {
  const { removeItemFromCart } = useShoopingCart();
  const item = items.find((i) => i.id === id);
  if (item.id == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex  align-items-center mb-2"
    >
      <img
        src={item.imgUrl}
        alt="img"
        style={{
          width: "120px",
          height: "70px",
          borderRadius: "6px",
          objectFit: "cover",
        }}
      />

      <div className="me-auto">
        {item.name}
        {quantity > 1 ? (
          <div style={{ fontSize: "11px" }}>
            {FormateCurrency(item.price)}{" "}
            <span className="text-danger">x{quantity}</span>
          </div>
        ) : (
          <div style={{ fontSize: "11px" }}>{FormateCurrency(item.price)}</div>
        )}
      </div>
      <div style={{ fontSize: "14px" }}>
        {FormateCurrency(item.price * quantity)}
      </div>
      <Button variant="outline-danger" onClick={() => removeItemFromCart(id)} size="sm">
        &times;
      </Button>
    </Stack>
  );
};

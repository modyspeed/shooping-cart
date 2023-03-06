import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FormateCurrency } from "./FormateCurrency";
import { useShoopingCart } from "./shoopingContext/Context";

export const ItemsCard = ({ id, name, price, imgUrl }) => {
  const {
    increaseItemsInCart,
    decreaseItemsInCart,
    removeItemFromCart,
    getQuantityItems,
  } = useShoopingCart();
  const quantity = getQuantityItems(id);
  return (
    <Col>
      <Card>
        <Card.Img
          src={imgUrl}
          variant="top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column gap-3">
          <Card.Title className="d-flex justify-content-between align-items-center ">
            <span className="fs-3 ">{name}</span>
            <span>{FormateCurrency(price)}</span>
          </Card.Title>
          {quantity > 0 ? (
            <div className="d-flex justify-content-center align-items-center flex-column gap-2">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Button onClick={() => decreaseItemsInCart(id)}>-</Button>
                <span className="fs-2">{quantity} in cart</span>
                <Button onClick={() => increaseItemsInCart(id)}>+</Button>
              </div>
              <Button onClick={() => removeItemFromCart(id)} variant="danger">
                Remove
              </Button>
            </div>
          ) : (
            <Button onClick={() => increaseItemsInCart(id)} className="w-100">
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

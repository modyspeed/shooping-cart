import React from "react";
import { Row } from "react-bootstrap";
import items from "../components/data/Items..json";
import { ItemsCard } from "../components/ItemsCard";
export const StorePage = () => {
  return (
    <Row md={2} sm={1} xs={1} lg={3} className="g-3">
      {items.map((item) => {
        return <ItemsCard key={item.id} {...item} />;
      })}
    </Row>
  );
};

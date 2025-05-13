import React from "react";
import Product from "./product";

export default function ProductTab() {
  let colors = ["red", "blue", "green"];
  let options = { a: "hello", b: "world" };
  return (
    <div style={{ display: "flex" }}>
      <Product
        title="Pen"
        price={10 / 2}
        features={colors}
        features1={options}
      />
      <Product
        title="phone"
        price={50000}
        features={colors}
        features1={options}
      />
      <Product
        title="shoe"
        price={2500}
        features={colors}
        features1={options}
      />
    </div>
  );
}

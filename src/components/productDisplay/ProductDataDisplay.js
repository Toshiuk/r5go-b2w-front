import React, { useEffect } from "react";
import reactHtmlParser from "react-html-parser";
import { HistoryHandler } from "../history";

import ProductDisplayTitle from "./ProductDisplayTitle";

const ProductDataDisplay = ({ product }) => {
  const { barcode } = product;

  useEffect(() => {
    HistoryHandler.addProduct(barcode, product);
  }, []);

  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle
        code={barcode}
        productName={product.title}
        thumb={product.image}
      />
      <div className="productDisplay__scores">
        Body {reactHtmlParser(product.body)}
      </div>
      <div className="productDisplay__scores">Price {[product.price]}</div>
    </div>
  );
};

export default ProductDataDisplay;

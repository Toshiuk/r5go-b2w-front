/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import reactHtmlParser from "react-html-parser";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { HistoryHandler } from "../history";

import ProductDisplayTitle from "./ProductDisplayTitle";

const ProductDataDisplay = ({ product }) => {
  const { barcode } = product;
  const [quantity, setQuantity] = useState(1);
  const zeroPad = (num, places) => String(num).padStart(places, "0");
  const history = useHistory();
  useEffect(() => {
    HistoryHandler.addProduct(barcode, product, 0);
  }, []);

  const addProductQuantity = () => {
    HistoryHandler.addProduct(barcode, product, quantity);
    history.push(`/cart`);
  };

  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle
        code={barcode}
        productName={product.title}
        thumb={product.image}
      />
      <div className="productDisplay__priceadd">
        <div className="productDisplay__price__label">
          Por:{" "}
          <span className="productDisplay__price">R$ {[product.price]}</span>
        </div>
        <div className="productDisplay__add">
          <div
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="productDisplay__add__changeQuantity"
          >
            -
          </div>
          <div className="productDisplay__add__quantity">
            {zeroPad(quantity, 2)}
          </div>
          <div
            onClick={() => quantity < 6 && setQuantity(quantity + 1)}
            className="productDisplay__add__changeQuantity"
          >
            +
          </div>
        </div>
      </div>
      <div className="productDisplay__description">
        {reactHtmlParser(product.body)}
      </div>
      <Button onClick={addProductQuantity} className="productDisplay__button">
        ADICIONAR AO CARRINHO
      </Button>
    </div>
  );
};

export default ProductDataDisplay;

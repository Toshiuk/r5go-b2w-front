/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactHtmlParser from "react-html-parser";
import { Typography } from "@material-ui/core";
import HistoryHandler from "../history/historyHandler";

import "./cart.css";

const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(HistoryHandler.getCartProducts());

  const removeProduct = product => {
    HistoryHandler.addProductQuantity(product.barcode, product, 0);
    setProducts(HistoryHandler.getCartProducts());
  };
  const zeroPad = (num, places) => String(num).padStart(places, "0");
  return (
    <div className="cart">
      <div className="cart__list">
        <div className="cart__title">
          <Typography className="cart__title__h2" variant="h2">
            {" "}
            Carrinho de compras{" "}
          </Typography>
          <Typography className="cart__title__h3" variant="h3">
            {" "}
            Confirme sua compra{" "}
          </Typography>
        </div>
        {products === null || products.length === 0 ? (
          <div className="cart__emptyState">
            <h2 className="cart__emptyState__title">
              Carrinho vazio! Go scan!
              <span role="img" aria-label="cart">
                🛒
              </span>
            </h2>
          </div>
        ) : (
          products.map(({ data }) => {
            const { title, image, barcode, body, price, quantity } = data;
            return (
              <div key={barcode} className="cart__listItem">
                <div className="cart__thumbWrapper">
                  {image ? (
                    <img
                      src={image}
                      className="cart__thumb"
                      alt={`${title} thumb`}
                    />
                  ) : (
                    <div className="skeleton__imageThumb">
                      Picture not found
                    </div>
                  )}
                </div>
                <div className="cart__textWrapper">
                  <h2 className="cart__name">{title}</h2>
                  <div className="cart__body">{reactHtmlParser(body)}</div>
                  <div className="cart__price cart__body">
                    Por: <span className="cart__price__value">R${price}</span>
                  </div>
                </div>
                <div className="cart__actions cart__linkWrapper">
                  <Link to={`/product/${barcode}`}>
                    <div className="cart__quantity ">
                      <span className="cart__number">
                        {zeroPad(quantity, 2)}
                      </span>
                    </div>
                  </Link>
                  <div
                    onClick={() => removeProduct(data)}
                    className="cart__remove"
                  >
                    x
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;

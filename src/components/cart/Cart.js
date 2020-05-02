/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactHtmlParser from "react-html-parser";
import {
  Typography,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import HistoryHandler from "../history/historyHandler";

import "./cart.css";

const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(HistoryHandler.getCartProducts());
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    HistoryHandler.emptyQuantity();
  };

  const removeProduct = product => {
    HistoryHandler.addProduct(product.barcode, product, 0);
    setProducts(HistoryHandler.getCartProducts());
  };

  const totalValue = () =>
    products
      .reduce(
        (acc, product) =>
          acc + parseInt(product.data.price, 2) * product.data.quantity,
        0
      )
      .toFixed(2)
      .toString()
      .replace(".", ",");

  const zeroPad = (num, places) => String(num).padStart(places, "0");
  return (
    <div className="cart">
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
      <div className="cart__list">
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
                  <Link className="cart__link" to={`/product/${barcode}`}>
                    <h2 className="cart__name">{title}</h2>
                    <div className="cart__body">{reactHtmlParser(body)}</div>
                    <div className="cart__price cart__body">
                      Por: <span className="cart__value">R${price}</span>
                    </div>
                  </Link>
                </div>
                <div className="cart__actions cart__linkWrapper">
                  <div className="cart__quantity ">
                    <span className="cart__number">{zeroPad(quantity, 2)}</span>
                  </div>
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
      <Divider className="divider" />
      <div className="cart__generalInfo">
        <div className="cart__totalPrice">
          Total da compra:
          <br />
          <span className="cart__value">R$ {totalValue()}</span>
        </div>
        <div className="cart__paymentMethod">
          Método de pagamento:
          <br />
          <span className="cart__value">AME Digital</span>
        </div>
        <Typography className="cart__changePaymentMethod">
          Trocar o método de pagamento?
        </Typography>
      </div>
      <Button
        disabled={products === null || products.length === 0}
        onClick={handleClickOpen}
        className={`cart__button ${
          products === null || products.length === 0
            ? "cart__button__disabled"
            : ""
        } `}
      >
        CONFIRMAR A COMPRA
      </Button>

      <Dialog open={open} className="cart__confirm">
        <DialogTitle>Sua compra foi confirmada com sucesso!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography className="cart__confirm__text">
              {" "}
              Entrega estimada: <span className="cart__value"> 00:45 min</span>
            </Typography>
            <Link className="cart__link" to="/history">
              <Typography className="cart__goHome">Voltar ao inicio</Typography>
            </Link>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cart;

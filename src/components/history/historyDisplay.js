import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactHtmlParser from "react-html-parser";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import PersonIcon from "@material-ui/icons/Person";
import { Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HistoryHandler from "./historyHandler";

import "./historyDisplay.css";

const HistoryDisplay = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(HistoryHandler.getProducts());

  return (
    <div className="history">
      <div className="history__header">
        <div className="history__profile">
          <div className="history__profile__user">
            <span className="history__profile__icon">
              <PersonIcon />
            </span>
            Bom dia,&nbsp;
            <span className="history__profile__name">Antonio</span>
          </div>
          <div className="history__profile___location">
            <LocationOnIcon /> Recife, Pernambuco
          </div>
        </div>

        <div className="history__header_description">
          <Typography variant="h3" className="history__header__h3">
            Grande mês dos cosméticos
          </Typography>
          <Typography variant="p">
            Até 20% de descontos em compras pelo GoScan
          </Typography>
          <Typography variant="p">Ofertas válidas até 01/06</Typography>
        </div>
      </div>
      <div className="history__list">
        <Typography className="history__title" variant="h3">
          {" "}
          Seus scans recents{" "}
        </Typography>
        {products === null ? (
          <div className="history__emptyState">
            <h2 className="history__emptyState__title">
              Scan some products to see them here!{" "}
              <span role="img" aria-label="egg">
                🥚
              </span>
            </h2>
          </div>
        ) : (
          products.map(({ data }) => {
            const { title, image, barcode, body, price } = data;
            console.log(products);
            return (
              <div key={barcode} className="history__listItem">
                <div className="history__thumbWrapper">
                  {image ? (
                    <img
                      src={image}
                      className="history__thumb"
                      alt={`${title} thumb`}
                    />
                  ) : (
                    <div className="skeleton__imageThumb">
                      Picture not found
                    </div>
                  )}
                </div>
                <div className="history__textWrapper">
                  <h2 className="history__name">{title}</h2>
                  <div className="history__body">{reactHtmlParser(body)}</div>
                  <div className="history__price history__body">
                    Por:{" "}
                    <span className="history__price__value">R${price}</span>
                  </div>
                </div>
                <Link
                  className="history__linkWrapper"
                  to={`/product/${barcode}`}
                >
                  <AddShoppingCartRoundedIcon className="history__cart" />
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HistoryDisplay;

import React, { useState } from "react";

import BarcodeInputField from "../barcodeInputField";

import "./productNotFound.css";

const ProductNotFound = props => {
  const { location } = props;

  const [code] = useState(new URLSearchParams(location.search).get("code"));

  return (
    <div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">
        Produto não encontrado{" "}
        <span role="img" aria-label="crying emoji">
          😢
        </span>
      </h2>
      <p>O codigo de barras: {code} não deu resultado!</p>
      <p>Tente entrar com o codigo de barras abaixo:</p>
      <BarcodeInputField />
    </div>
  );
};

export default ProductNotFound;

import React from "react";

const ProductDisplayTitle = ({ productName, code, thumb }) => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__thumbContainer">
      {thumb ? (
        <img src={thumb} alt="Product front" />
      ) : (
        <div className="skeleton__image">Foto não encontrada</div>
      )}
    </div>
    <div className="productDisplay__textContainer">
      <h2 className="productDisplay__title">{productName}</h2>
      <div className="productDisplay__barcode">{code}</div>
    </div>
  </div>
);

export default ProductDisplayTitle;

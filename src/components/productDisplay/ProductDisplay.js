import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import { useHistory } from "react-router";
import ProductDataDisplay from "./ProductDataDisplay";
import ProductDisplaySkeleton from "./productDisplay.skeleton";
import "./productDisplay.css";
import api from "../services/api";

const ProductDisplay = ({ match }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api
      .get(`/products/barcode/${match.params.id}`)
      .then(res => {
        setProduct(res.data.data);
      })
      .catch(() => {
        history.push(`/product/not-found?code=${match.params.id}`);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? <ProductDisplaySkeleton /> : ""}
      {!isEmpty(product) ? <ProductDataDisplay product={product} /> : ""}
    </>
  );
};

export default ProductDisplay;

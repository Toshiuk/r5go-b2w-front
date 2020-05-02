class HistoryHandler {
  static addProduct(code, productData, quantity = 0) {
    localStorage.setItem(code, JSON.stringify({ ...productData, quantity }));
    this.updateProducts(code);
  }

  static updateProducts(productToAdd) {
    if (this.getProductsId() === null) {
      localStorage.setItem("products", productToAdd);
      return;
    }
    if (this.getProductsId().includes(productToAdd)) {
      return;
    }

    localStorage.setItem(
      "products",
      this.getProductsId()
        .split(",")
        .concat(`${productToAdd}`)
        .join()
    );
  }

  static getProduct(id) {
    return localStorage.getItem(id);
  }

  static getProductsId() {
    return localStorage.getItem("products");
  }

  static getProducts() {
    if (this.getProductsId() === null) {
      return null;
    }
    return this.getProductsId()
      .split(",")
      .map(x => ({ code: x, data: JSON.parse(this.getProduct(x)) }));
  }

  static getCartProducts() {
    return (this.getProducts() || []).filter(
      product => !!product.data.quantity
    );
  }

  static emptyQuantity() {
    (this.getProducts() || []).map(product =>
      this.addProduct(product.code, product.data, 0)
    );
  }
}

export default HistoryHandler;

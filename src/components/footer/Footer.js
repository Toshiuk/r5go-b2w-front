import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";

import "./footer.css";

const Footer = () => (
  <div className="footer">
    <Link className="footer__link" to="/history">
      <HomeIcon />
      Inicio
    </Link>
    <Link className="footer__link" to="/cart">
      <ShoppingCartIcon />
      Carrinho
    </Link>
    <Link className="footer__link" to="/camera">
      <HorizontalSplitIcon className="rotate" />
      Scan
    </Link>
    <Link className="footer__link" to="/chat">
      <ChatRoundedIcon />
      Chat
    </Link>
  </div>
);

export default Footer;

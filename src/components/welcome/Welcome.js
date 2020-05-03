/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

import "./welcome.css";
import { Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import LocationHandler from "../locationHandler";

const Welcome = () => {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

  const buyInHome = () => {
    LocationHandler.setLocationStore(false);
    history.push(`/history`);
  };

  const buyInStore = () => {
    LocationHandler.setLocationStore(true);
    history.push(`/history`);
  };

  return (
    <div className="general-out-box">
      <div className="welcome">
        <Typography className="welcome__h2" variant="h2">
          Bem-Vindo
        </Typography>
        <div className="welcome__body">
          <Typography className="welcome__h3" variant="h3">
            Por onde vamos começar?
          </Typography>
          <Typography className="welcome__p">
            Você pode iniciar uma compra de casa ou em uma loja física
          </Typography>
          <div className="welcome__buttons">
            <div className="welcome__button" onClick={buyInHome}>
              <div className="welcome__button__icon">
                <HomeIcon />
              </div>
              <div className="welcome__button__description">
                <p className="welcome__button__main">Estou em casa</p>{" "}
                <p className="welcome__button__secondary">
                  Dê scan em produtos e Go!
                </p>
              </div>
            </div>

            <div className="welcome__button" onClick={buyInStore}>
              <div className="welcome__button__icon">
                <StoreIcon />
              </div>
              <div className="welcome__button__description">
                <p className="welcome__button__main">Estou em uma loja</p>{" "}
                <p className="welcome__button__secondary">
                  Selecione um produto e pague pelo app
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <p className="welcome__a">Entrar em outra conta?</p>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

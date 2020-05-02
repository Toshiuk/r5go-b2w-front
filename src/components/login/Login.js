import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  CircularProgress
} from "@material-ui/core";
import { useHistory } from "react-router";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LogoIcon from "../../assets/icons/LogoIcon";
import "./login.css";

const Login = () => {
  const [enter, setEnter] = useState(false);
  const history = useHistory();

  const onEnter = () => {
    setEnter(true);
    setTimeout(() => history.push(`/welcome`), 2000);
  };

  return (
    <div className="general-out-box out-box-bg-red fix-fill-window">
      <div className="login">
        <div className="login_logo">
          <LogoIcon />
        </div>
        {enter ? (
          <div className="login_loading">
            <CircularProgress className="loading" disableShrink />
          </div>
        ) : (
          <div className="login_form">
            <TextField
              className="login_form_input"
              placeholder="Usuário"
              variant="outlined"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className="login_form_input"
              placeholder="Password"
              variant="outlined"
              color="secondary"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button
              className="login_form_button"
              variant="contained"
              onClick={onEnter}
            >
              {" "}
              Acessar{" "}
            </Button>
          </div>
        )}
        <div className="login_footer">
          <p>Cadastrar</p>
          <p>Esqueceu a senha?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

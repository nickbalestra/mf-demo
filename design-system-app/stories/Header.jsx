import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import Logo from "./assets/op-logo.svg";
import "./header.css";

export const Header = ({
  user,
  onConnect,
  onUnconnect,
  leftContent,
  rightContent,
  backgroundColor,
  logo,
}) => (
  <header>
    <div className="wrapper">
      <div>
        <img src={logo ? logo : Logo} alt="React Logo" />
        {leftContent}
      </div>
      <div>
        <div style={{ display: "inline", marginRight: "16px" }}>
          {rightContent}
        </div>
        {user ? (
          <>
            <span className="welcome">
              <b>{user.address}</b>
            </span>
            <Button
              size="small"
              onClick={onUnconnect}
              label="Unconnect wallet"
              backgroundColor={backgroundColor}
            />
          </>
        ) : (
          <Button
            primary
            size="small"
            onClick={onConnect}
            label="Connect wallet"
            backgroundColor={backgroundColor}
          />
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onConnect: PropTypes.func.isRequired,
  onUnconnect: PropTypes.func.isRequired,
  leftContent: PropTypes.element,
  rightContent: PropTypes.element,
  backgroundColor: PropTypes.string,
  logo: PropTypes.string,
};

Header.defaultProps = {
  user: null,
  backgroundColor: null,
  leftContent: null,
  rightContent: null,
};

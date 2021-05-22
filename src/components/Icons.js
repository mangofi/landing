import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Icons = () => {
  return (
    <div className="social-icons d-flex" style={{ marginTop: "14px" }}>
      <span className="social-icon">
        <a href="https://t.me/mango_fi" target="_blank">
          <FontAwesomeIcon icon={["fab", "telegram-plane"]} size="2x" />
        </a>
      </span>
      <span className="social-icon">
        <a href="https://twitter.com/mangofi_" target="_blank">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>
      </span>
      <span className="social-icon">
        <a href="https://mangofi.medium.com/" target="_blank">
          <FontAwesomeIcon icon={["fab", "medium"]} size="2x" />
        </a>
      </span>
      <span className="social-icon">
        <a href="https://bscscan.com/address/0x833aEeD69D1B14Db89ea49cAc93D5E55c6a16cB3" target="_blank">
          <img src="/img/bscscan_logo.svg" width={34} height={32}/>
        </a>
      </span>
    </div>
  );
};

export default Icons;

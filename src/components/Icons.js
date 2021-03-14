import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Icons = () => {
  return (
    <div className="icons d-flex" style={{ marginTop: "14px" }}>
      <span className="mr-4">
        <a href="https://t.me/mango_fi" target="_blank">
          <FontAwesomeIcon icon={["fab", "telegram-plane"]} size="2x" />
        </a>
      </span>
      <span className="mr-4">
        <a href="https://twitter.com/fi_mango" target="_blank">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>
      </span>
      <span className="mr-4">
        <a href="#">
          <FontAwesomeIcon icon={["fab", "medium"]} size="2x" />
        </a>
      </span>
    </div>
  );
};

export default Icons;

/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import "../assets/css/ButtonIcon.css";

export default function ButtonIcon(props) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (props?.handleFileChange) {
      inputRef.current.click();
    } else {
      props?.handleClick();
    }
  };

  if (props.noLink) {
    return (
      <Button
        onClick={handleClick}
        className={"ButtonIcon"}
        type={props.type}
        variant={props.variant}
        aria-label={props.arialLabel}
        size={props.size}
        color={props.color}
        startIcon={props.startIcon ? props.startIcon : ""}
        endIcon={props.endIcon ? props.endIcon : ""}
        disabled={props.disabled}
      >
        <span style={{ fontSize: "0.68rem" }}>{props.children}</span>
        {props.handleFileChange && (
          <input
            type="file"
            accept="image/*"
            multiple
            ref={inputRef}
            style={{ display: "none" }}
            onChange={props.handleFileChange}
          />
        )}
      </Button>
    );
  } else {
    return (
      <Link to={props.to && !props.disabled ? props.to : "#"} style={props.style}>
        <Button
          className={"ButtonIcon "}
          variant={props.variant}
          onClick={handleClick}
          size={props.size}
          color={props.color}
          aria-label={props.arialLabel}
          startIcon={props.startIcon ? props.startIcon : ""}
          endIcon={props.endIcon ? props.endIcon : ""}
          style={props.styleButton && props.styleButton}
          disabled={props.disabled}
        >
          <span>{props.children}</span>
        </Button>
      </Link>
    );
  }
}

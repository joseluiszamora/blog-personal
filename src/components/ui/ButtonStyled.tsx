"use client";
import React from "react";

interface ButtonStyledProps {
  text?: string;
  onClick?: () => void;
}

export function ButtonStyled({ text = "Button", onClick }: ButtonStyledProps) {
  const buttonStyles: React.CSSProperties = {
    alignItems: "center",
    backgroundImage: "linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)",
    border: "0",
    borderRadius: "8px",
    boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
    boxSizing: "border-box",
    color: "#ffffff",
    display: "flex",
    fontSize: "18px",
    justifyContent: "center",
    lineHeight: "1em",
    maxWidth: "100%",
    minWidth: "140px",
    padding: "3px",
    textDecoration: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  const spanStyles: React.CSSProperties = {
    backgroundColor: "rgb(5, 6, 45)",
    padding: "16px 24px",
    borderRadius: "6px",
    width: "100%",
    height: "100%",
    transition: "300ms",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const span = e.currentTarget.querySelector("span") as HTMLSpanElement;
    if (span) {
      span.style.background = "none";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const span = e.currentTarget.querySelector("span") as HTMLSpanElement;
    if (span) {
      span.style.backgroundColor = "rgb(5, 6, 45)";
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(0.9)";
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={(e) => (e.currentTarget.style.outline = "0")}
      onClick={onClick}
    >
      <span style={spanStyles} className="text">
        {text}
      </span>
    </button>
  );
}

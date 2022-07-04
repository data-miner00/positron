import React from "react";
import "./ImgButton.css";

type Props = {
  img: React.ReactNode;
  onClick?: () => void;
};

function ImgButton({ img, onClick }: Props) {
  return (
    <button className="img-button" onClick={onClick}>
      {img}
    </button>
  );
}

export default ImgButton;

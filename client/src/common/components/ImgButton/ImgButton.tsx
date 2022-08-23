import { ImgButtonProps } from "../models";

import "./ImgButton.css";

function ImgButton({ img, onClick }: ImgButtonProps) {
  return (
    <button className="img-button" onClick={onClick}>
      {img}
    </button>
  );
}

export default ImgButton;

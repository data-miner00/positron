import { ImgButtonProps } from "../models";

import "./ImgButton.css";

function ImgButton({ img, onClick, "data-testid": testid }: ImgButtonProps) {
  return (
    <button className="img-button" onClick={onClick} data-testid={testid}>
      {img}
    </button>
  );
}

export default ImgButton;

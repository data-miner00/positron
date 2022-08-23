import { InspiredContainerProps } from "../../models";

import "./InspiredContainer.css";

function InspiredContainer({ inspirings }: InspiredContainerProps) {
  return (
    <ul className="inspired-container">
      {inspirings.map((inspire, index) => (
        <li key={index}>
          <a href={inspire.link} target="_blank" rel="noreferrer">
            <img src={inspire.image} alt={inspire.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default InspiredContainer;

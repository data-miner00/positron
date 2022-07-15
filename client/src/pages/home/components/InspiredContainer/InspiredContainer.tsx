import { InspiredContainerProps } from "../../models";
import "./InspiredContainer.css";

function InspiredContainer({ inspirings }: InspiredContainerProps) {
  return (
    <ul className="inspired-container">
      {inspirings.map((inspire) => (
        <li>
          <a href={inspire.link} target="_blank">
            <img src={inspire.image} alt={inspire.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default InspiredContainer;

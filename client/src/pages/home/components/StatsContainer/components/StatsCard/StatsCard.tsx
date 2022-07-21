import { StatsAttributes } from "pages/home/models";

import "./StatsCard.css";

function StatsCard({ figure, description }: StatsAttributes) {
  return (
    <article className="stats-card">
      <h1>{figure}</h1>
      <p>{description}</p>
    </article>
  );
}

export default StatsCard;

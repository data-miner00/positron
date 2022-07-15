import { StatsAttributes, StatsContainerProps } from "../../models";
import "./StatsContainer.css";

function StatsCard({ figure, description }: StatsAttributes) {
  return (
    <article className="stats-card">
      <h1>{figure}</h1>
      <p>{description}</p>
    </article>
  );
}

function StatsContainer({ stats }: StatsContainerProps) {
  return (
    <div className="stats-container">
      {stats.map((stat) => (
        <StatsCard figure={stat.figure} description={stat.description} />
      ))}
    </div>
  );
}

export default StatsContainer;

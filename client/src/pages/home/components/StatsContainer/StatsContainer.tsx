import { StatsContainerProps } from "../../models";
import StatsCard from "./components/StatsCard";
import "./StatsContainer.css";

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

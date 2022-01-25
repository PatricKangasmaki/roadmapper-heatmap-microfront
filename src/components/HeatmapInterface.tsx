import React, { useEffect, useState } from "react";
import { Roadmap } from "../types";
import { TaskHeatmap } from "./TaskHeatmap";
import { api } from "../api/api";

export const HeatmapInterface = () => {
  const [roadmap, setRoadmap] = useState<Roadmap | undefined>(undefined);

  useEffect(() => {
    const getRoadmap = async () => {
      const firstRoadmap = await api.getRoadmap();
      setRoadmap(firstRoadmap);
    };
    getRoadmap();
  }, []);

  if (!roadmap)
    return (
      <div>
        <i>Error fetching the roadmap data..</i>
      </div>
    );

  return <TaskHeatmap currentRoadmap={roadmap} />;
};

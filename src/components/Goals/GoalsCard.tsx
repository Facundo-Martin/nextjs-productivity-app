import React from "react";
import { weeklyGoal } from "../../interfaces";
import Card from "../Card";

export default function GoalsCard({ goals }: { goals: weeklyGoal }) {
  return (
    <Card>
      <h1 className="text-center font-medium text-xl">Week {goals.week}</h1>
      <ul className="mt-4 ml-6 list-disc text-lg">
        {goals.goals.map((goal) => (
          <li className="">{goal}</li>
        ))}
      </ul>
    </Card>
  );
}

import React from "react";
import { goals } from "../../data";
import GoalsCard from "./GoalsCard";

export default function GoalsDisplay() {
  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 grid-flow-row-dense gap-4">
        {goals.map((goals) => (
          <GoalsCard goals={goals} />
        ))}
      </div>
    </section>
  );
}

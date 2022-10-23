import React from "react";
import { goals } from "../../data";
import GoalsCard from "./GoalsCard";

export default function GoalsDisplay() {
  return (
    <section className="section">
      <h1>Goals Display</h1>
      <div>
        {goals.map((goals) => (
          <GoalsCard goals={goals} />
        ))}
      </div>
    </section>
  );
}

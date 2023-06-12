import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'movie-tracker',
      description: 'Movie Tracker',
      link: "https://jacobz96.github.io/movie-tracker/",
      repo: "https://github.com/JacobZ96/movie-tracker"
    },
    {
      name: 'pastel-puzzels',
      description: 'PWA Text Editor',
      link: "https://github.com/JacobZ96/pwa-text-editor",
      repo: "https://github.com/JacobZ96/pwa-text-editor"
    },
    {
      name: 'work-day-scheduler',
      description: 'Work Day Scheduler',
      link: "https://jacobz96.github.io/work-day-scheduler/",
      repo: "https://github.com/JacobZ96/work-day-scheduler"
    },
    {
      name: 'led-wall',
      description: 'Forum for people with Dysphagia',
      link: "https://github.com",
      repo: "https://github.com/nlewis742/eat-speak-love"
    },
    {
      name: 'daily-zen',
      description: 'Daily Zen Journal application',
      link: "https://stark-cliffs-80324.herokuapp.com/",
      repo: "https://github.com/mrott0397/daily-zen-journal"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

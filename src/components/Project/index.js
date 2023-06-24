import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {

  const { name, repo, link, description } = project;
  const imagePath = require(`../../assets/projects/${name}.jpg`)

  return (
    <div className="project" key={name}>
      <img
        src={imagePath}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;

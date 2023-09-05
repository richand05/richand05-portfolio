import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import './projects.css';

const Projects = ({ repo = [] }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className="projects-container">
      {isLoading ? (
        <div className="loader" ><strong>Loading...</strong></div>
      ) : (
        Array.isArray(repo) && repo.map((item, index) => (
          <Card key={index} item={item} index={index}></Card>
        ))
      )}
    </div>
  );
}

export default Projects;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);

  return (
    <nav>
      <Link to="/">Home</Link>
      {paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join('/')}`;
        return (
          <span key={url}>
            {' > '}
            <Link to={url}>{path}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

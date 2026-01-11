import React, { useState } from 'react';

export const RouterContext = React.createContext();

export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => {
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Route = ({ path, component: Component }) => {
  const { currentPath } = React.useContext(RouterContext);

  if (path === currentPath) {
    return <Component />;
  }

  const pathParts = path.split('/');
  const currentParts = currentPath.split('/');

  if (pathParts.length === currentParts.length) {
    const match = pathParts.every((part, i) =>
      part.startsWith(':') || part === currentParts[i]
    );

    if (match) {
      const params = {};
      pathParts.forEach((part, i) => {
        if (part.startsWith(':')) {
          params[part.slice(1)] = currentParts[i];
        }
      });
      return <Component params={params} />;
    }
  }

  return null;
};

export const Link = ({ to, children, className = '' }) => {
  const { navigate } = React.useContext(RouterContext);

  return (
    <button onClick={() => navigate(to)} className={className}>
      {children}
    </button>
  );
};

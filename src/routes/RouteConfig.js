// src/components/RouterConfig.jsx
import { Routes, Route } from 'react-router-dom';
import { routes } from './index';
import ProtectedRoute from './ProtectedRoute';
import RedirectToHomeIfAuthenticated from './RedirectToHomeIfAuthenticated';

const RouterConfig = () => {
  // Flatten the routes and create Route elements
  const renderRoutes = () => {
    const flatRoutes = [];

    routes.forEach(route => {
      if (route.children) {
        route.children.forEach(child => {
          let element = <child.element />;
          
          if (route.protected) {
            element = <ProtectedRoute>{element}</ProtectedRoute>;
          }
          
          if (route.redirectIfAuth) {
            element = <RedirectToHomeIfAuthenticated>{element}</RedirectToHomeIfAuthenticated>;
          }

          flatRoutes.push(
            <Route
              key={`${route.path}/${child.path}`}
              path={`${route.path}/${child.path}`}
              element={element}
            />
          );
        });
      } else {
        flatRoutes.push(
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      }
    });

    return flatRoutes;
  };

  return (
    <Routes>
      {renderRoutes()}
    </Routes>
  );
};

export default RouterConfig;
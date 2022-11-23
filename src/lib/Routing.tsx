import { useRoutes } from 'react-router-dom';
import NotFound from '../pages/404';
import Home from '../pages/Home';

const Routing = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFound /> },
  ]);
};
export default Routing;

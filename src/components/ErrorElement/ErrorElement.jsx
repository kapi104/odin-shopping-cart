import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  return <main>{error.statusText || error.message}</main>;
};

export default ErrorElement;

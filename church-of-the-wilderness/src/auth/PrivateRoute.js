import React from 'eact';
import { Route, Redirect } from 'eact-router-dom';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component,...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated()? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      )}
    />
  );
};

export default PrivateRoute;
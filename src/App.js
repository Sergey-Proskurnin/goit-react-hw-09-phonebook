import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrentUser,
  getFetchigCurrentUser,
  getCurrentToken,
} from 'redux/auth';
import routes from './routes';
import PrivateRoute from 'components/PriveteRoute';
import PublicRoute from 'components/PublicRoute';
import OnLoader from 'components/OnLoader';

const HomeView = lazy(() =>
  import('views/HomeView' /*webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /*webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('views/LoginView' /*webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /*webpackChunkName: "contacts-view" */),
);

const App = () => {
  const isFetchigCurrentUser = useSelector(state =>
    getFetchigCurrentUser(state),
  );

  const isToken = useSelector(state => getCurrentToken(state));
  const dispatch = useDispatch();
  const onGetCurretnUser = () => dispatch(getCurrentUser);
  useEffect(() => {
    isToken && onGetCurretnUser();
  });

  return (
    <div>
      <AppBar />

      {isFetchigCurrentUser ? (
        <OnLoader />
      ) : (
        <Suspense fallback={<OnLoader />}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} classN />
            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterView}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.login}
              restricted
              component={LoginView}
              redirectTo={routes.contacts}
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo={routes.login}
            />
          </Switch>
        </Suspense>
      )}
    </div>
  );
};

export default App;

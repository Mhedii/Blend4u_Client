import React from 'react';
import useAuth from '../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    console.log(user.name);
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.name ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}>
            </Route>

        </div>
    );
};

export default PrivateRoute;
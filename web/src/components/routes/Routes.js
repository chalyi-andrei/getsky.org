import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LatestAdverts from './LatestAdverts';
import SearchAdverts from './SearchAdverts';
import Registration from './Registration';
import Login from './Login';
import PostAdvert from './PostAdvert';
import PostingsPreview from './PostingsPreview';
import AdvertDetails from './AdvertDetails';
import UserSettings from './UserSettings';
import Dashboard from './Dashboard';
import EditPosting from './EditPosting';
import ContactUs from './ContactUs';
import {
    ForgotPassword,
    ResetPassword,
} from './ForgotPassword';

import {
    Terms,
    Privacy,
    FAQ,
    WhySkycoin,
} from './Content';

const PrivateRoute = connect(({ login }) => ({
    login
}), null)(({ login, ...props }) => {
    if (login.authorized) return <Route {...props} />

    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
});

const Routes = ({ match }) => {
    return (
        <Switch>
            <Route path={`/search`} component={SearchAdverts} />
            <Route path={`/register`} component={Registration} />
            <Route path={`/login`} component={Login} />
            <Route path={`/forgot-password`} component={ForgotPassword} />
            <Route path={`/password-recovery`} component={ResetPassword} />
            <Route path={`/post/:id`} component={AdvertDetails} />
            <Route path={`/contact-us`} component={ContactUs} />

            <Route path={`/why-skycoin`} component={WhySkycoin} />
            <Route path={`/faq`} component={FAQ} />
            <Route path={`/terms`} component={Terms} />
            <Route path={`/privacy`} component={Privacy} />

            <PrivateRoute path={`/dashboard`} component={Dashboard} />
            <PrivateRoute path={`/user-settings`} component={UserSettings} />
            <PrivateRoute path={`/postings/buy/preview`} component={PostingsPreview} />
            <PrivateRoute path={`/postings/sell/preview`} component={PostingsPreview} />
            <PrivateRoute path={`/postings/sell`} component={PostAdvert} />
            <PrivateRoute path={`/postings/buy`} component={PostAdvert} />
            <PrivateRoute path={`/edit-post/:id`} component={EditPosting} />

            <Route path={`/`} component={LatestAdverts} />
        </Switch>
    );
};

Routes.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string.isRequired,
    }).isRequired,
};

export default Routes;

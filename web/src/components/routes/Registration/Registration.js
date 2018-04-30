import React from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { Helmet } from 'react-helmet';

import { getPageTitle } from 'utils';
import Container from 'components/layout/Container';
import RegistrationForm from './RegistrationForm';
import { register } from './actions'

class Registration extends React.Component {
    onSubmit = (user) => {
        const { registerUser } = this.props;

        return registerUser(user)
            .catch(err => {
                throw new SubmissionError(err)
            });
    }

    render() {
        return (
            <Container flex='1 0 auto' flexDirection="column" py={5}>
                <Helmet><title>{getPageTitle('Registration')}</title></Helmet>
                <h2>Registration</h2>
                <RegistrationForm onSubmit={this.onSubmit} />
            </Container>
        );
    }
}

export default connect(null, { registerUser: register })(Registration)

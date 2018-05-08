import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Helmet } from 'react-helmet';

import { getPageTitle } from 'utils';
import Container from 'components/layout/Container';
import { H2 } from 'components/layout/Text';

import ContactUsForm from './ContactUsForm';
import { submitFeedbackForm } from './actions';

class ContactUs extends React.Component {
    handleSubmit = form => {
        const { submitFeedbackForm, push } = this.props;

        return submitFeedbackForm(form)
            .then(() => {
                push('/');
            });
    }
    render() {
        return (
            <Container flex='1 0 auto' flexDirection="column" py={5}>
                <Helmet><title>{getPageTitle('Contact us')}</title></Helmet>
                <H2 my={[4, 6]}>Contact us</H2>
                <ContactUsForm onSubmit={this.handleSubmit} />
            </Container>);
    }
}

export default connect(null, { submitFeedbackForm, push })(ContactUs);

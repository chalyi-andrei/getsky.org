import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { Link } from 'react-router-dom';
import { getPageTitle } from 'utils';

import Container from 'components/layout/Container';
import { H2 } from 'components/layout/Text';

import ContactUsForm from './ContactUsForm';
import { submitFeedbackForm } from './actions';
import Breadcrumbs from '../../layout/Breadcrumbs/Breadcrumbs';

const Content = styled(Flex)`
    flex-direction: column;
    max-width: 860px;
    margin: 0 auto;
    width: 100%;
    align-items: center;
`;


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
            <div>
                <Helmet><title>{getPageTitle('Contact us')}</title></Helmet>
                <Breadcrumbs page="Contact" />
                <Container flex='1 0 auto' flexDirection="column" py={5}>
                <Content>
                    <H2 wide>Contact us</H2>
                    <ContactUsForm onSubmit={this.handleSubmit}/>
                </Content>
            </Container>
            </div>);
    }
}

export default connect(null, { submitFeedbackForm, push })(ContactUs);

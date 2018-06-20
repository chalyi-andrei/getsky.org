import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';

import { required, email, maxLength } from 'validation/rules';
import { FormInput, FormTextArea, FormCaptcha } from '../../layout/Form';
import { Submit } from 'components/layout/Button';

const ContactForm = styled(Form)`
    width: 100%;
`;
const r = required(v => v);
const maxLength10K = maxLength(10000);

const ContactUsForm = ({ handleSubmit, pristine, submitting, invalid }) => (
    <ContactForm onSubmit={handleSubmit}>
        <Flex flexDirection="column" flexWrap="wrap" alignItems="center" justifyContent="center" mt={30} >
            <Box w={1} mb={25}>
                <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between" mx={-3}>
                    <Box width={[1, 1 / 2]} px={3}>
                        <Field name="name" component={FormInput} isRequired validate={[r]} type="text" label="Name" placeholder="Name" />
                    </Box>
                    <Box width={[1, 1 / 2]} px={3}>
                        <Field name="email" component={FormInput} isRequired validate={[r, email]} type="email" label="Email" placeholder="Email" />
                    </Box>
                </Flex>
            </Box>
            <Box w={1} mb={25}>
                <Field name="subject" component={FormInput} type="text" label="Subject" isRequired validate={[r]} placeholder="Type something..." />
            </Box>
            <Box w={1} mb={25}>
                <Field name="message" component={FormTextArea} tip="Up to 10,000 characters" isRequired validate={[r, maxLength10K]} label="Message" placeholder="Message" />
            </Box>
            <Flex justifyContent="center" flexDirection="column">
                <Field name="recaptcha" component={FormCaptcha} validate={[r]} withRef ref={r => { this.recaptchaField = r }} isRequired />
                <Submit disabled={invalid || pristine || submitting} showSpinner={submitting} text="Send Message" primary />
            </Flex>
        </Flex>
    </ContactForm>);

export default reduxForm({
    form: 'contactUsForm'
})(ContactUsForm);
